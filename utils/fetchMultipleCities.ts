import { CityWeather } from "@/types/weather";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export async function fetchCitiesWeather(
  cities: string[],
  unit: string
): Promise<CityWeather[]> {
  const results = await Promise.all(
    cities.map(async (city) => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch weather for ${city}`);
      }

      const data = await res.json();

      return {
        city,
        temperature: data.main.temp,
        condition: data.weather[0].main,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
      };
    })
  );

  return results;
}

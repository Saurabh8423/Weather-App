const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export async function fetchWeather(city: string, unit: string) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch weather");
  }

  return data;
}

export async function fetchForecast(city: string, unit: string) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Forecast not available");
  }

  return data;
}

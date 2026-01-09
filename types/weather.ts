export interface WeatherData {
    name: string;
    main: {
        temp: number;
        humidity: number;
    };
    weather: {
        main: string;
        description: string;
    }[];
    wind: {
        speed: number;
    };
}


export interface ForecastData {
    list: {
        dt_txt: string;
        main: { temp: number };
        weather: { main: string }[];
    }[];
}

export interface CityWeather {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}

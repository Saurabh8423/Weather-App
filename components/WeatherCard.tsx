import { WeatherData } from "@/types/weather";


export default function WeatherCard({ data }: { data: WeatherData }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow 
                text-black dark:text-white
                transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-xl font-bold">{data.name}</h2>
            <p>{data.weather[0].main}</p>
            <p>🌡 Temp: {data.main.temp}°</p>
            <p>💧 Humidity: {data.main.humidity}%</p>
            <p>🌬 Wind: {data.wind.speed} m/s</p>
        </div>

    );
}
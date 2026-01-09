import { ForecastData } from "@/types/weather";


export default function Forecast({ data }: { data: ForecastData }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {data.list.slice(0, 5).map((item, i) => (
                <div
                    key={i}
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded text-black dark:text-white
                 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
                >
                    <p>{item.dt_txt.split(" ")[0]}</p>
                    <p>{item.main.temp}°</p>
                    <p>{item.weather[0].main}</p>
                </div>
            ))}
        </div>

    );
}
"use client";
import { CityWeather } from "@/types/weather";

interface Props {
  data: CityWeather[];
}

export default function WeatherTable({ data }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 dark:border-gray-700 text-black dark:text-white">
        <thead className="bg-gray-200 dark:bg-gray-800">
          <tr>
            <th className="p-2">City</th>
            <th className="p-2">Temp (°)</th>
            <th className="p-2">Condition</th>
            <th className="p-2">Humidity (%)</th>
            <th className="p-2">Wind (m/s)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="text-center border-t dark:border-gray-700
             hover:bg-gray-100 dark:hover:bg-gray-700
             transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
            >
              <td className="p-2 font-medium">{item.city}</td>
              <td className="p-2">{item.temperature}</td>
              <td className="p-2">{item.condition}</td>
              <td className="p-2">{item.humidity}</td>
              <td className="p-2">{item.windSpeed}</td>
            </tr>

          ))}
        </tbody>
      </table>

    </div>
  );
}

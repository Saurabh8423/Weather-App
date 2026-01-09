"use client";
import { useState } from "react";


export default function SearchBar({ onSearch }: { onSearch: (c: string) => void }) {
    const [city, setCity] = useState("");


    return (
        <div className="flex gap-2">
            <input
                className="border p-2 rounded w-full bg-white text-black dark:bg-gray-800 dark:text-white
             transition-all duration-300 ease-in-out
             focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button
                className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700 dark:hover:bg-blue-500
             transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => onSearch(city)}
            >
                Search
            </button>

        </div>
    );
}
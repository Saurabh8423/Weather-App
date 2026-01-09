"use client";

import { useEffect, useState } from "react";

import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import Forecast from "@/components/Forecast";
import ThemeToggle from "@/components/ThemeToggle";
import Skeleton from "@/components/Skeleton";
import WeatherTable from "@/components/WeatherTable";
import Pagination from "@/components/Pagination";

import { fetchWeather, fetchForecast } from "@/utils/fetchWeather";
import { getUserLocation } from "@/utils/getLocation";
import { fetchCitiesWeather } from "@/utils/fetchMultipleCities";
import { cities } from "@/utils/cities";

import { CityWeather } from "@/types/weather";

export default function Home() {
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [tableData, setTableData] = useState<CityWeather[]>([]);
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 5;

  /* Auto-detect location */
  useEffect(() => {
    getUserLocation()
      .then(setCity)
      .catch(() => { });
  }, []);

  /* Fetch searched city weather */
  useEffect(() => {
    if (!city) return;

    setLoading(true);
    Promise.all([fetchWeather(city, unit), fetchForecast(city, unit)])
      .then(([w, f]) => {
        setWeather(w);
        setForecast(f);
        setError("");
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [city, unit]);

  /* Fetch table data */
  useEffect(() => {
    fetchCitiesWeather(cities, unit)
      .then(setTableData)
      .catch(() => { });
  }, [unit]);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedData = tableData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE);

  return (
    <main className="p-6 max-w-5xl mx-auto space-y-8">
      {/* ================= PREMIUM HEADER ================= */}
      <div
        className="rounded-2xl p-6
                   bg-white/70 dark:bg-gray-900/70
                   backdrop-blur-xl
                   border border-gray-200 dark:border-gray-800
                   shadow-lg
                   transition-all duration-300"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1
              className="text-3xl font-extrabold
                         bg-gradient-to-r from-blue-600 to-cyan-500
                         bg-clip-text text-transparent
                         tracking-tight"
            >
              🌦 Weather Forecast App
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Real-time weather & 5-day forecast
            </p>
          </div>

          <ThemeToggle />
        </div>

        {/* Search + Unit Toggle */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 items-stretch">
          <div className="flex-1">
            <SearchBar onSearch={setCity} />
          </div>

          <button
            onClick={() =>
              setUnit(unit === "metric" ? "imperial" : "metric")
            }
            className="px-6 py-2 rounded-xl font-medium
                       bg-gradient-to-r from-blue-600 to-cyan-500
                       text-white
                       shadow-md
                       transition-all duration-300
                       hover:scale-105 hover:shadow-xl
                       active:scale-95"
          >
            {unit === "metric" ? "°C → °F" : "°F → °C"}
          </button>
        </div>
      </div>
      {/* =================================================== */}

      {/* Current Weather */}
      {loading && <Skeleton />}
      {error && <p className="text-red-500">{error}</p>}

      {weather && (
        <div className="transition-all duration-300 hover:scale-[1.01]">
          <WeatherCard data={weather} />
        </div>
      )}

      {/* Forecast */}
      {forecast && (
        <div className="transition-all duration-300">
          <Forecast data={forecast} />
        </div>
      )}

      {/* ================= TABLE SECTION ================= */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-bold tracking-tight">
          🌍 Weather of Major Cities
        </h2>

        {tableData.length === 0 ? (
          <Skeleton />
        ) : (
          <>
            <div className="rounded-xl overflow-hidden shadow-md">
              <WeatherTable data={paginatedData} />
            </div>

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        )}
      </section>
      {/* ================================================= */}
    </main>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    setDark(storedTheme === "dark");
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark, mounted]);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle Theme"
      className="
        flex items-center justify-center
        w-10 h-10 rounded-full
        border border-gray-300 dark:border-gray-700
        bg-white dark:bg-gray-900
        shadow-sm
        transition-all duration-300 ease-in-out
        hover:scale-110 hover:shadow-md
        active:scale-95
      "
    >
      {/* Icon Switch */}
      <span
        className="text-lg transition-transform duration-300"
        key={dark ? "dark" : "light"}
      >
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}

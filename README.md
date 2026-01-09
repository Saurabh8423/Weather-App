# 🌦 Weather Forecasting Web Application

A modern Weather Forecast web application built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. It provides real-time weather, 5-day forecasts, auto location detection, dark/light mode, skeleton loaders, and a paginated table of major cities using the **OpenWeather API**.

---

## 🚀 Features

* 🔍 Search weather by city
* 📍 Auto-detect user location
* 🌡 Unit toggle (°C / °F)
* 🌗 Dark & Light mode toggle
* 📆 5-day weather forecast
* 📊 Weather table (25 cities) with pagination
* ⏳ Skeleton loading UI
* ⚠️ Error handling (invalid city / network issues)
* 📱 Fully responsive UI

---

## 🛠 Tech Stack

* **Next.js 16 (App Router)**
* **React.js**
* **TypeScript**
* **Tailwind CSS**
* **OpenWeather API**

---

## 📂 Project Folder Structure

```
weather-app/
│── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
│── components/
│   ├── SearchBar.tsx
│   ├── WeatherCard.tsx
│   ├── Forecast.tsx
│   ├── WeatherTable.tsx
│   ├── Pagination.tsx
│   ├── ThemeToggle.tsx
│   └── Skeleton.tsx
│
│── utils/
│   ├── fetchWeather.ts
│   ├── fetchMultipleCities.ts
│   ├── getLocation.ts
│   └── cities.ts
│
│── types/
│   └── weather.ts
│
│── .env.example
│── .env.local
│── tailwind.config.js
│── postcss.config.js
│── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
```

👉 Get your API key from: [https://openweathermap.org/api](https://openweathermap.org/api)

---

## 🎨 Tailwind CSS Setup

Already configured using:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Tailwind is imported in:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## ▶️ Run the Project

```bash
npm run dev
```

Open browser:

```
http://localhost:3000
```

---

## 🔌 APIs Used

| Feature           | API                  |
| ----------------- | -------------------- |
| Current Weather   | `/data/2.5/weather`  |
| 5-Day Forecast    | `/data/2.5/forecast` |
| Reverse Geocoding | `/geo/1.0/reverse`   |



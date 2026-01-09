import { NextResponse } from "next/server";

const API_KEY = process.env.WEATHER_API_KEY;

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");
    const unit = searchParams.get("unit") || "metric";

    if (!city) {
        return NextResponse.json(
            { error: "City is required" },
            { status: 400 }
        );
    }

    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
        );

        if (!res.ok) {
            return NextResponse.json(
                { error: "Failed to fetch weather" },
                { status: res.status }
            );
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}
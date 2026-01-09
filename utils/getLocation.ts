const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export function getUserLocation(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const res = await fetch(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`
          );

          if (!res.ok) {
            throw new Error("Reverse geocoding failed");
          }

          const data = await res.json();

          if (!Array.isArray(data) || data.length === 0) {
            throw new Error("City not found from location");
          }

          resolve(data[0].name);
        } catch (err) {
          reject(err);
        }
      },
      () => reject("Location permission denied")
    );
  });
}

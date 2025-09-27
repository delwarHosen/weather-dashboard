import { useEffect, useState } from "react"

const useWeather = () => {
    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        latitude: "",
        longitude: "",
    })
    const [loading, setLoading] = useState({
        state: false,
        message: ""
    })
    const [error, setError] = useState(null);

    const fetchWeatherData = async (latitude, longitude) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Fetching weather data..."
            })
            const respons = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);
            if (!respons.ok) {
                const errorMessage = `Fetching weather Data failed: ${respons.status}`;
                throw new Error(errorMessage)
            }

            const data = await respons.json();
            const updateWeatherData = {
                ...weatherData,
                location: data?.name,
                climate: data?.weather[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind.speed,
                time: data?.dt,
                latitude: latitude,
                longitude: longitude,

            }

            setWeatherData(updateWeatherData)

        } catch (error) {
            setError(error)
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: "Fetching weather data..."
            })
        }
    }

    useEffect(() => {
        setLoading({
            ...loading,
            state: true,
            message: "Finding Location..."
        })
        navigator.geolocation.getCurrentPosition(function (position) {
            fetchWeatherData(position.coords.latitude, position.coords.longitude)
        })
    }, []);

    return { weatherData, loading, error }
}
export default useWeather
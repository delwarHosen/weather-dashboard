import { useContext, useEffect, useState } from "react";
import WeatherBoard from "./components/weather/WeatherBoard";
import Header from "./header/Header";
import { WeatherContext } from "./context";

import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import SnowImage from "./assets/backgrounds/snow.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";
import CloudsImage from "./assets/backgrounds/few-clouds.jpg"

const Page = () => {
    const { weatherData, loading } = useContext(WeatherContext);

    console.log(weatherData, loading);

    const [climateImage, setClimateImage] = useState("");

    function getBackgroundImage(climate) {
        switch (climate) {
            case "Rain":
                return RainyDayImage;
            case "Clouds":
               return CloudsImage;
            case "Clear":
                return ClearSkyImage;
            case "Snow":
                return SnowImage;
            case "Thunder":
                return ThunderStormImage;
            case "Fog":
                return WinterImage;
            case "Haze":
                return FewCloudsImage;
            case "Mist":
                return MistImage;


            default:
                ClearSkyImage
        }
    }

    useEffect(() => {
        const bgImage = getBackgroundImage(weatherData.climate);
        setClimateImage(bgImage)
    }, [weatherData.climate])
    return (
        <>{
            loading.state ? (
                <div className="flex justify-center">
                    <p className="text-2xl font-semibold text-center mt-10 p-5 rounded bg-white w-1/2 text-gray-600">{loading.message}</p>
                </div>
            )

                :
                (
                    <div
                        style={{ backgroundImage: `url('${climateImage}')` }}
                        className="grid place-items-center min-h-screen bg-no-repeat bg-cover sm:bg-[length:contain] md:bg-cover" >
                        <Header />
                        <main className="mt-16">
                            <section>
                                <WeatherBoard />
                            </section>
                        </main>
                    </div >
                )
        }

        </>

    );
};

export default Page;
import { useContext } from "react";
import pinIcon from "../../assets/pin.svg"
import { WeatherContext } from "../../context";
import SunnyIcon from "../../assets/icons/sunny.svg";
import RainIcon from "../../assets/icons/sunny.svg";
import CloudIcon from "../../assets/icons/cloud.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import HazIcon from "../../assets/icons/haze.svg";
import thunderIcon from "../../assets/icons/thunder.svg";

import { getFormattedDate } from "../../utils/date-utils";

const WeatherHedline = () => {
    const { weatherData } = useContext(WeatherContext);
    const { climate, location, temperature, time } = weatherData;
    function getWeatherIcon(climate) {
        switch (climate) {
            case "Rain":
                return RainIcon;
            case "Clouds":
                return CloudIcon;
            case "Clear":
                return SunnyIcon;
            case "Snow":
                return SnowIcon;
            case "Thunder":
                return thunderIcon;
            case "Fog":
                return HazIcon;
            case "Haze":
                return HazIcon;
            case "Mist":
                return HazIcon

            default:
                return SunnyIcon
        }
    }

    return (
        <div>
            <div className="max-md:flex items-center justify-between md:-mt-10">
                <img src={getWeatherIcon(climate)} alt="cloud" />
                <div className="max-md:flex items-center max-md:space-x-4">
                    <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">{Math.round(temperature)}°</h1>
                    <div className="flex items-center space-x-4 md:mb-4">
                        <img src={pinIcon} />
                        <h2 className="text-2xl lg:text-[50px]">{location}</h2>
                    </div>
                </div>
            </div>
            <p className="text-sm lg:text-lg">{getFormattedDate(time,"time",false)} - {getFormattedDate(time,"date",false)}</p>
        </div>
    );
};

export default WeatherHedline;
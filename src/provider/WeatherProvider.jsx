import { WeatherContext } from "../context"
import { useWeather } from "../hooks";
import PropTypes from "prop-types";


const WeatherProvider = ({ children }) => {
    const { weatherData, loading, error } = useWeather();
    return (
        <WeatherContext.Provider value={{ weatherData, loading, error }}>
            {children}
        </WeatherContext.Provider>
    )
}

WeatherProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};

export default WeatherProvider
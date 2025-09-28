import Page from "./Page";
import { FavouriteProvider, LocationProvider, WeatherProvider } from "./provider";


function App() {
    return (
        <LocationProvider>
            <WeatherProvider>
                <FavouriteProvider>
                    <Page/>
                </FavouriteProvider>
            </WeatherProvider>
        </LocationProvider>
    );
}

export default App;

// 01789c778a1a9ba3ad376b2c841f9330
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

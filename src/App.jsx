import WeatherBoard from "./components/weather/WeatherBoard";
import Header from "./header/Header";
import { FavouriteProvider, WeatherProvider } from "./provider";


function App() {
    return (
        <WeatherProvider>
            <FavouriteProvider>
                <div className="grid place-items-center h-screen">
                    <Header />
                    <main className="mt-16">
                        <section>
                            <WeatherBoard />
                        </section>
                    </main>
                </div>
            </FavouriteProvider>
        </WeatherProvider>
    );
}

export default App;

// 01789c778a1a9ba3ad376b2c841f9330
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

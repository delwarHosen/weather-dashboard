import heartIcon from "../../assets/heart.svg"
import heartRedFav from "../../assets/heart-red.svg"
import { useContext, useEffect, useState } from "react";
import { FavouriteContext, WeatherContext } from "../../context";


const AddToFavourite = () => {
    const { addToFavourites, removeFromFavourite, favourites } = useContext(FavouriteContext);
    const { weatherData } = useContext(WeatherContext);
    const { latitude, longitude, location } = weatherData;

    const [isFavroute, toggleFavourite] = useState(false);

    useEffect(()=>{
        const found = favourites.find((fav)=>fav.location ===location);
        toggleFavourite(found)
    },[])

    function handleFavroute() {
        const found = favourites.find((fav) => fav.location === location);
        
        if (!found) {
            addToFavourites(latitude, longitude, location)
        }
        else {
            removeFromFavourite(location)
        }

        toggleFavourite(!isFavroute)
    }
    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button onClick={handleFavroute} className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
                    <span>Add to Favourite</span>
                    <img src={isFavroute ? heartRedFav : heartIcon} alt="" />
                </button>

            </div>
        </div>

    );
};

export default AddToFavourite;
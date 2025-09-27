import { FavouriteContext } from "../context"; 
import { useLocalStorage } from "../hooks";
import PropTypes from "prop-types";


const FavouriteProvider = ({ children }) => {
    const [favourites, setFavourites] = useLocalStorage("favorites", [])
    

    const addToFavourites = (latitude, longitude, location) => {
        setFavourites([
            ...favourites,
            { latitude, longitude, location }  
        ]);
    }

    const removeFromFavourite = (location) => {
        const restFavourites = favourites.filter((fav) => fav.location !== location);
        setFavourites(restFavourites)
        localStorage.removeItem("favorites")

    }

    return (
        <FavouriteContext.Provider value={{ addToFavourites, removeFromFavourite, favourites }}>
            {children}
        </FavouriteContext.Provider>
    );
};


FavouriteProvider.propTypes = {
    children: PropTypes.node.isRequired, // validates children
};

export default FavouriteProvider;
import { useState } from "react";
import { LocationContext } from "../context";
import PropTypes from "prop-types";

const LocationProvider = ({ children }) => {
    const [selectedLocation, setSelectedLocation] = useState({
        location: "",
        latitude: 0,
        longitude: 0
    })
    return (
        <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
            {children}
        </LocationContext.Provider>
    );
};

LocationProvider.propTypes = {
    children: PropTypes.node.isRequired, // validates children
};
export default LocationProvider;
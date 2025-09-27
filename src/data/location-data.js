const data = [
    { location: "Dhaka", latitude: 23.8103, longitude: 90.4125 },
    { location: "Rangpur", latitude: 25.7460, longitude: 89.2500 },
    { location: "Europe (Brussels)", latitude: 50.8503, longitude: 4.3517 },
    { location: "Washington D.C.", latitude: 38.9072, longitude: -77.0369 },
    { location: "London", latitude: 51.5072, longitude: -0.1276 },
    { location: "Tokyo", latitude: 35.6895, longitude: 139.6917 },
    { location: "Ottawa", latitude: 45.4215, longitude: -75.6972 },
    { location: "Canberra", latitude: -35.2809, longitude: 149.1300 },
    { location: "New Delhi", latitude: 28.6139, longitude: 77.2090 },
    { location: "Paris", latitude: 48.8566, longitude: 2.3522 }
];

function getLocations() {
    return data;
}

function getLoationByName(location) {
    if (!location) return null

    const filtered = data.filter((item) => item.location === location);

    if (filtered, length > 0) {
        return filtered[0]
    }
    else {
        const defaultLocation = {
            location: "",
            latitude: 0,
            longitude: 0
        }
        return defaultLocation;
    }
}

export { getLoationByName, getLocations }
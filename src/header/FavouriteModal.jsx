import { useContext } from "react";
import { FavouriteContext, LocationContext } from "../context";


const FavouriteModal = () => {
    const { favourites } = useContext(FavouriteContext);
    const {setSelectedLocation} = useContext(LocationContext)
    return (
        <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
            <h3 className="md:text-lg text-sm font-bold md:px-4">Favourite Locations</h3>
            <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                {
                    favourites.length > 0 ? (
                        favourites.map((fav) => (
                            <li key={fav.location} className="hover:bg-gray-200">
                                <a onClick={() => setSelectedLocation({ ...fav })}>
                                    {fav.location}
                                </a>
                            </li>
                        ))
                    )
                        :
                        (
                            <p>Nothing is added to favourites</p>
                        )
                }
                
            </ul>
        </div>
    );
};

export default FavouriteModal;
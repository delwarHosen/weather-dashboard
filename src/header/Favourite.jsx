import favouriteImage from "../assets/heart.svg"
import PropTypes from "prop-types";


const Favourite = ({onShow}) => {
    return (
        <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
            <img src={favouriteImage} alt="" />
            <span onClick={onShow}>Favourite Locations</span>
        </div>
    );
};



Favourite.propTypes = {
    onShow: PropTypes.node.isRequired, // validates children
};

export default Favourite;
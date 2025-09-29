import logoImage from "../assets/weatherLogo.png"

const Logo = () => {
    return (
         <a href="./index.html">
                    <img className="md:h-[65px] h-9" src={logoImage} alt="Weather App" />
                </a>
    );
};

export default Logo;
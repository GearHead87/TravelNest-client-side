import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import TouristsSpots from "../components/TouristsSpots";
import Slider from "../components/Slider";
import CountriesSection from "../components/CountriesSection";

const Home = () => {
    const touristSpots = useLoaderData();
    console.log(touristSpots);
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <TouristsSpots
                spots={touristSpots}
            ></TouristsSpots>
            <CountriesSection></CountriesSection>
        </div>
    );
};

export default Home;
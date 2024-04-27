import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import TouristsSpots from "../components/TouristsSpots";
import Slider from "../components/Slider";
import CountriesSection from "../components/CountriesSection";
import TestimonialSection from "../components/TestimonialSection";
import FaqSection from "../components/FaqSection";

const Home = () => {
    const touristSpots = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <TouristsSpots
                spots={touristSpots}
            ></TouristsSpots>
            <CountriesSection></CountriesSection>
            <TestimonialSection></TestimonialSection>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;
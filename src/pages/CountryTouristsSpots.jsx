import { useLoaderData } from "react-router-dom";
import CountryTouristsSpotCard from "../components/CountryTouristsSpotCard";

const CountryTouristsSpots = () => {
    const touristSpots = useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                touristSpots.map(spot=>(
                    <CountryTouristsSpotCard
                        key={spot._id}
                        spot={spot}
                    >
                    </CountryTouristsSpotCard>
                ))
            }
        </div>
    );
};

export default CountryTouristsSpots;
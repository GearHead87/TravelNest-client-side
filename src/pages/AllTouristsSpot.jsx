import { useLoaderData } from "react-router-dom";
import TouristsSpotCard from "../components/TouristsSpotCard";

const AllTouristsSpot = () => {
    const touristSpots = useLoaderData();

    return (
        <div>
            <div className="grid grid-cols-2">
                {
                    touristSpots.map(spot => (
                        <TouristsSpotCard
                            key={spot._id}
                            spot={spot}
                        ></TouristsSpotCard>
                    ))
                }
            </div>

        </div>
    );
};

export default AllTouristsSpot;
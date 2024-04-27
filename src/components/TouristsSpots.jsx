import TouristsSpotCard from "./TouristsSpotCard";

const TouristsSpots = ({ spots }) => {
    return (
        <div>
            <h2 className="text-center text-4xl my-10">Expoler Our Tourist Spots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    spots.map(spot => (

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

export default TouristsSpots;
import Lottie from "lottie-react";
import loadingAnimation from "./travelBusAnimation.json";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100vh',
};

const AddTouristsSpot = () => {

    const { user } = useContext(AuthContext);

    const handleAddTouristsSpot = e => {
        e.preventDefault();
        const form = e.target;
        const imageURL = form.imageURL.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const description = form.description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const email = form.email.value;
        const userName = form.userName.value;

        const TouristSpotInfo = { imageURL, tourists_spot_name, country_Name, location, description, average_cost, seasonality, travel_time, totalVisitorsPerYear, email, userName };
        console.log(TouristSpotInfo);

        fetch("http://localhost:5000/tourist-spots/", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(TouristSpotInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data?.insertedId){
                    form.reset();
                    toast.success("Tourists Spot Added Successfully");
                }
            })
    }


    return (
        <div>
            {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            {/* <p className="max-w-xl text-lg">
                                At the same time, the fact that we are wholly owned and totally independent from
                                manufacturer and other group control gives you confidence that we will only recommend what
                                is right for you.
                            </p>

                            <div className="mt-8">
                                <a href="#" className="text-2xl font-bold text-pink-600"> 0151 475 4450 </a>

                                <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
                            </div> */}
                            <Lottie
                                animationData={loadingAnimation}
                                style={style}
                            />
                        </div>

                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form onSubmit={handleAddTouristsSpot} className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="imageURL">imageURL</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="imageURL"
                                        type="text"
                                        id="imageURL"
                                        name="imageURL"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="imageURL">tourists_spot_name</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="tourists_spot_name"
                                        type="text"
                                        id="tourists_spot_name"
                                        name="tourists_spot_name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="imageURL">country_Name</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="country_Name"
                                        type="text"
                                        id="country_Name"
                                        name="country_Name"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="imageURL">location</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="location"
                                            type="text"
                                            id="location"
                                            name="location"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="sr-only" htmlFor="imageURL">seasonality</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="seasonality"
                                            type="text"
                                            id="seasonality"
                                            name="seasonality"
                                            required
                                        />
                                    </div>

                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                            name="email"
                                            defaultValue={user?.email}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="phone">User Name</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="User Name"
                                            type="tel"
                                            id="userName"
                                            defaultValue={user?.displayName}
                                            name="userName"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                    <div>
                                        <label className="sr-only" htmlFor="imageURL">average_cost</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="average_cost"
                                            type="number"
                                            id="average_cost"
                                            name="average_cost"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="sr-only" htmlFor="imageURL">totalVisitorsPerYear</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="totaVisitorsPerYear"
                                            type="number"
                                            id="totalVisitorsPerYear"
                                            name="totalVisitorsPerYear"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="sr-only" htmlFor="imageURL">travel_time</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="travel_time"
                                            type="text"
                                            id="travel_time"
                                            name="travel_time"
                                            required
                                        />
                                    </div>

                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="message">description</label>

                                    <textarea
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Short Description"
                                        rows="8"
                                        id="description"
                                        name="description"
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Add Tourist Spot
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddTouristsSpot;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountriesSection = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCountries = async () => {
            await fetch(`http://localhost:5000/countries`)
                .then(res => res.json())
                .then(data => {
                    setCountries(data);
                    setLoading(false);
                })
        }
        fetchCountries();
    }, [])

    if (loading) {
        return (
            <div className="flex items-center justify-center my-10">
                <span className="loading loading-ring loading-lg"></span>
            </div>
        )

    }


    return (
        <div className="my-10">
            <h2>this is coutnty</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    countries.map(country => (
                        <>
                            <Link to={`/tourists-spot-country/${country.country_name}`} className="block">
                                <img
                                    alt=""
                                    src={country.image}
                                    className="h-40 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-40 lg:h-40"
                                />

                                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                                    <strong className="font-medium">{country.country_name}</strong>

                                    <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                                    <p className="mt-0.5 opacity-50 sm:mt-0">{country.short_description}</p>
                                </div>
                            </Link>
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default CountriesSection;
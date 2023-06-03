import { useState, useEffect } from "react";
import { fetchNearestRestaurants } from "../api/restaurants";

const Results = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        // Fetch the user's live location using the Geolocation API
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                const data = await fetchNearestRestaurants(latitude, longitude);
                setRestaurants(data);
            },
            (error) => {
                const resultsElement = document.getElementsByClassName("results")[0];
                resultsElement.innerText = error;
              }
              
        );
    }, []);

    return (
        <div>
            <h1>Nearest Restaurants</h1>
            <div className="h-[50vh] results">
                <h1 className=" font-black text-3xl text-blue-600 ">No data Available</h1>
                {restaurants.map((restaurant) => (
                    <div key={restaurant.id}>
                        <h2>{restaurant.name}</h2>
                        <img src={restaurant.image} alt={restaurant.name} />
                        <p>{restaurant.address}</p>
                        <p>Rating: {restaurant.rating}</p>
                        <p>Phone: {restaurant.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Results;

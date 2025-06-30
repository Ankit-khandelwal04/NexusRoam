import React, { useEffect, useState } from "react";
import { Restaurant } from "../lib/types";
import { fetchRestaurants } from "../data/api";

interface RestaurantsProps {
  city: string;
}

const Restaurants: React.FC<RestaurantsProps> = ({ city }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    if (city) {
      fetchRestaurants(city).then(setRestaurants).catch(console.error);
    }
  }, [city]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Restaurants in {city}</h2>
      {restaurants.length === 0 ? (
        <p>No restaurants found for this search.</p>
      ) : (
        <ul className="space-y-2">
          {restaurants.map((restaurant) => (
            <li key={restaurant.id} className="border p-3 rounded shadow">
              <p><strong>{restaurant.name}</strong></p>
              <p>🍽 Cuisine: {restaurant.cuisine || "Various"}</p>
              <p>📍 Address: {restaurant.address}</p>
              <p>⭐ Rating: {restaurant.rating} / 5</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Restaurants;

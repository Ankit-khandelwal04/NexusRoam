import React, { useEffect, useState } from "react";
import { TouristSpot } from "../lib/types";
import { fetchTouristSpots } from "../data/api";

interface TouristSpotsProps {
  city: string;
}

const TouristSpots: React.FC<TouristSpotsProps> = ({ city }) => {
  const [spots, setSpots] = useState<TouristSpot[]>([]);

  useEffect(() => {
    if (city) {
      fetchTouristSpots(city).then(setSpots).catch(console.error);
    }
  }, [city]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Tourist Attractions in {city}</h2>
      {spots.length === 0 ? (
        <p>No tourist attractions found for this search.</p>
      ) : (
        <ul className="space-y-2">
          {spots.map((spot) => (
            <li key={spot.id} className="border p-3 rounded shadow">
              <p className="text-lg font-bold">{spot.name}</p>
              <p>📍 Location: {spot.location}</p>
              {spot.description && <p className="text-sm text-gray-600 mt-1">{spot.description}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TouristSpots;

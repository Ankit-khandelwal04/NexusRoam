import React, { useEffect, useState } from "react";
import { Hotel } from "../lib/types";
import { fetchHotels } from "../data/api";

interface HotelsProps {
  city: string;
}

const Hotels: React.FC<HotelsProps> = ({ city }) => {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    if (city) {
      fetchHotels(city).then(setHotels).catch(console.error);
    }
  }, [city]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Hotels in {city}</h2>
      {hotels.length === 0 ? (
        <p>No hotels found for this search.</p>
      ) : (
        <ul className="space-y-2">
          {hotels.map((hotel) => (
            <li key={hotel.id} className="border p-3 rounded shadow">
              <p><strong>{hotel.name}</strong> — {hotel.city}</p>
              {hotel.address && <p>📍 {hotel.address}</p>}
              <p>⭐ Rating: {hotel.rating} / 5</p>
              <p>💰 Price/Night: ₹{hotel.pricePerNight}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Hotels;

import React, { useEffect, useState } from "react";
import { Transport } from "../lib/types";
import { fetchTransports } from "../data/api";

interface TransportsProps {
  city: string;
}

const Transports: React.FC<TransportsProps> = ({ city }) => {
  const [transports, setTransports] = useState<Transport[]>([]);

  useEffect(() => {
    if (city) {
      fetchTransports(city).then(setTransports).catch(console.error);
    }
  }, [city]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Transport Services in {city}</h2>
      {transports.length === 0 ? (
        <p>No transport services found for this search.</p>
      ) : (
        <ul className="space-y-2">
          {transports.map((transport) => (
            <li key={transport.id} className="border p-3 rounded shadow">
              <p><strong>{transport.type}</strong></p>
              <p>🛣 Route: {transport.route}</p>
              <p>💸 Fare: ₹{transport.fare}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Transports;

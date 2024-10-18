import React, { useState, useEffect } from 'react';
import { getStationById } from '../api/satnogsAPI';

function Station() {
  const [station, setStation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stationId = import.meta.env.VITE_GROUND_ID;
        const data = await getStationById(stationId);
        setStation(data[0]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h2>Station Details:</h2>
        <ul>
          {Object.entries(station).map(([key, value]) => (
            <li key={key}>
              <b>{key}:</b> {JSON.stringify(value)}
            </li>
          ))}
        </ul>
        <img src={station.image} alt={`Station: ${station.name}`} />
      </div>
    );
  }
}

export default Station;

import React, { useState, useEffect } from 'react';
import { getObservationsByStationId } from '../api/satnogsAPI';

function Observations() {
  const [observations, setObservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stationId = import.meta.env.VITE_GROUND_ID;
        const data = await getObservationsByStationId(stationId);
        setObservations(data);
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
        <h2>Observations:</h2>
        <ul>
          {observations.map((observation) => (
            <li key={observation.id}>
              {/* Adjust the output below to display relevant observation details */}
              <b>Observation ID:</b> {observation.id}, <b>Timestamp:</b> {observation.timestamp}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Observations;

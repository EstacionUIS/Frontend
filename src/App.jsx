import React, { useState, useEffect } from 'react';
import { getStationById } from './api/satnogsAPI'; // Import the function

function App() {
  const [station, setStation] = useState(null); // Store the fetched station data
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stationId = import.meta.env.VITE_GROUND_ID; // Replace with the desired station ID
        const data = await getStationById(stationId); 
        
        setStation(data); 
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
        <h1>SatNOGS Station Information</h1>
  
        <h2>Station Details:</h2>
        <ul>
          {Object.entries(station).map(([key, value]) => (
              <li key={key}>
                <b>{key}:</b> {JSON.stringify(value)}
              </li>
          ))}
        </ul>
        <img src={station.image} alt={`Station:${station.name}`} />
  
        {/* ... (rest of the component for observations) */}
      </div>
    );

  }
}

export default App;

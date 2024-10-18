import React, { useState, useEffect } from 'react';
import { getObservationsByStationId } from '../api/satnogsAPI';
import { useTranslation } from 'react-i18next';

function Observations() {
  const [observations, setObservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const observationsPerPage = 10; // Number of observations per page

  const { t } = useTranslation();

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

  // Calculate indexes for slicing the observations array
  const indexOfLastObservation = currentPage * observationsPerPage;
  const indexOfFirstObservation = indexOfLastObservation - observationsPerPage;
  const currentObservations = observations.slice(indexOfFirstObservation, indexOfLastObservation);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
          {currentObservations.map((observation) => (
            <li key={observation.id}> 
              {/* Display relevant observation details */}
              <b>Id:</b> {observation.id}, <b>{observation.status}</b>, <b>t{('timestamp')}</b> {observation.start}
            </li>
          ))}
        </ul>

        {/* Pagination controls */}
        <div>
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastObservation >= observations.length}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Observations;

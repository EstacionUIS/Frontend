import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Spinner from 'react-bootstrap/Spinner';

import Entry from './observations/entry';
import { getObservationsByStationId } from '../../api/satnogsAPI';

function Observations() {
  const [observations, setObservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const observationsPerPage = 10; // Number of observations per page
  const totalPages = Math.ceil(observations.length / observationsPerPage);

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
    return ( 
      <div className="d-flex justify-content-center align-items-center vh-100"> {/* Center the spinner */}
        <Spinner animation="border" role="status"> {/* Display the spinner */}
          <span className="visually-hidden">{t('loading')}...</span>
        </Spinner>
      </div>
    );
  } else {
      return (
        <div>
            <ul>
                {currentObservations.map((observation) => (
                    <Entry key={observation.id} observation={observation} />
                ))}
            </ul>

            {/* Pagination controls */}
            <div className="d-flex justify-content-center align-items-center">
                {/* Center the buttons and page count */}
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    {t('Observations.Previous')}
                </button>
                <span className="mx-3">
                    {/* Add spacing around the page count */}
                    {currentPage} / {totalPages}
                </span>
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={indexOfLastObservation >= observations.length}
                >
                    {t('Observations.Next')}
                </button>
            </div>
        </div>
    );
  }
}

export default Observations;

import React, { useState, useEffect } from 'react';
import { getObservationsByStationId } from '../api/satnogsAPI';
import { useTranslation } from 'react-i18next';

function Observations() {
  const [observations, setObservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>{t('loading')}...</div>;
  } else {
    return (
      <div>
        <h2>{t('observations')}:</h2>
        <ul>
          {observations.map((observation) => (
            <li key={observation.id}>
              {/* Adjust the output below to display relevant observation details */}
              <b>Id:</b> {observation.id}, <b>{observation.status}</b>, <b>t{('timestamp')}</b> {observation.start}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Observations;

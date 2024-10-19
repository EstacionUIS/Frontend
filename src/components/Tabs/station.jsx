import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import moment from 'moment';

import { getStationById } from '../../api/satnogsAPI';

import Header from './Station/header';
import Desc from './Station/desc';
import Location from './Station/location';
import Activity from './Station/activity';
import Observation from './Station/observation';
import Image from './Station/image';

function Station() {
  const [station, setStation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const { t } = useTranslation();

  useEffect(() => {
    // Load station data from localStorage if available
    const storedStation = localStorage.getItem('stationData');
    if (storedStation) {
      setStation(JSON.parse(storedStation));
      setLastUpdated(localStorage.getItem('lastUpdated'));
      setIsLoading(false);
    }

    // Fetch data initially
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const stationId = import.meta.env.VITE_GROUND_ID;
      const data = await getStationById(stationId);
      setStation(data[0]);
      setLastUpdated(new Date()); // Update last updated time

      // Store station data in localStorage
      localStorage.setItem('stationData', JSON.stringify(data[0]));
      localStorage.setItem('lastUpdated', new Date());
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (error) {
    return <div>t{('Error')}: {error.message}</div>;
  }

  if (isLoading) {
    return ( 
      <div className="d-flex justify-content-center align-items-center vh-100"> {/* Center the spinner */}
        <Spinner animation="border" role="status"> {/* Display the spinner */}
          <span className="visually-hidden">{t('loading')}...</span>
        </Spinner>
      </div>
    );
  }

  return (
      <div className="container">
          {station && <Header station={station} />}

          <div className="row mt-4">
              <div className="col-md-6">
                  {station && <Desc station={station} />}
                  {station && <Location station={station} />}
                  {station && <Activity station={station} />}
                  {station && <Observation station={station} />}
              </div>

              <div className="col-md-6">
                  {station && <Image station={station} />}
              </div>
          </div>

          {/* Update Button */}
          <div className="row mt-3">
              <div className="col-md-12 text-center">
                  <Button variant="primary" onClick={fetchData} disabled={isLoading}>
                      {isLoading ? (
                          <>
                              <Spinner animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                              {t('loading')}...
                          </>
                      ) : (
                          <>
                              {t('Station.Button.Title')}
                              {lastUpdated && (
                                  <span className="ms-2">
                                      ({t('Station.Button.LastUpdated')}: {moment(lastUpdated).fromNow()})
                                  </span>
                              )}
                          </>
                      )}
                  </Button>
              </div>
          </div>
      </div>
  );
}

export default Station;

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Badge from 'react-bootstrap/Badge';
import moment from 'moment';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

import { getStationById } from '../api/satnogsAPI';

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
  }

  // Function to determine badge color based on status
  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case 'Online':
        return 'success';
      case 'Offline':
        return 'danger';
      case 'Test':
        return 'warning';
      default:
        return 'secondary';
    }
  };

  return (

    <div className="container">

      {/* Top */}

      <div className="row mt-4">
        <div className="col-md-12 text-center">
          <div className="d-flex justify-content-center align-items-center">
            <Badge bg={getStatusBadgeVariant(station.status)} className="me-3">
              {station.id}
            </Badge>
            <h1>{station.name}</h1>
          </div>
        </div>
      </div>

      {/* Content */}

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card p-3 mb-3 rounded"> {/* Description box */}
            <p>{station.description}</p>
          </div>
          <div className="card p-3 mb-3 rounded"> {/* Location box */}
            <h5>{t('location')}</h5>
            <ul className="list-unstyled"> {/* ... (latitude, longitude, altitude) */}
              <li><b>{t('latitude')}:</b> {station.lat}</li>
              <li><b>{t('longitude')}:</b> {station.lng}</li>
              <li><b>{t('altitude')}:</b> {station.altitude} m</li>
            </ul>
          </div>
          <div className="card p-3 mb-3 rounded"> {/* Activity box */}
            <h5>{t('activity')}</h5>
            <ul className="list-unstyled"> {/* ... (last seen and created) */}
              <li><b>{t('lastSeen')}:</b> {moment(station.last_seen).format('LLL')}</li>
              <li><b>{t('created')}:</b> {moment(station.created).format('LLL')}</li> 
            </ul>
          </div>
          <div className="card p-3 rounded"> {/* Observations box */}
            <h5>{t('observations')}</h5>
            <p>{station.observations}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className='p-3'>
            <img src={station.image} alt={`Station: ${station.name}`} className="img-fluid w-75" /> {/* Resized image */}
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="card p-3 mt-3 rounded"> {/* Bar with template text */}
        <p>More details about the station, antenna specifications, and recent activities will be displayed here.</p>
      </div>

      {/* Update Button */}

      <div className="row mt-3"> {/* Row for the update button */}
        <div className="col-md-12 text-center">
          <Button variant="primary" onClick={fetchData} disabled={isLoading}>
            {isLoading ? (
              <>
                <Spinner animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                {t('loading')}...
              </>
            ) : (
              <>
                {t('update')}
                {lastUpdated && (
                  <span className="ms-2">
                    ({t('lastUpdated')}: {moment(lastUpdated).fromNow()})
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

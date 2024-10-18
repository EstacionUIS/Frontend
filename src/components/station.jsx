import React, { useState, useEffect } from 'react';
import { getStationById } from '../api/satnogsAPI';
import { useTranslation } from 'react-i18next';
import Badge from 'react-bootstrap/Badge';
import moment from 'moment';

function Station() {
  const [station, setStation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { t } = useTranslation();

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
    return <div>{t('loading')}...</div>;
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

      /* Top */

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

      /* Content */

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

      /* Bottom */

      <div className="card p-3 mt-3 rounded"> {/* Bar with template text */}
        <p>More details about the station, antenna specifications, and recent activities will be displayed here.</p>
      </div>

    </div>
  );
}

export default Station;

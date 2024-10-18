import React, { useState, useEffect } from 'react';
import { getStationById } from '../api/satnogsAPI';
import { useTranslation } from 'react-i18next';
import Badge from 'react-bootstrap/Badge'; // Import Badge component
import moment from 'moment'; // Import moment.js for date formatting

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
    <div className="container"> {/* Main container */}
      <div className="row mt-4"> {/* Top container */}
        <div className="col-md-12">
          <div className="d-flex justify-content-between align-items-center"> {/* Flexbox for alignment */}
            <Badge bg={getStatusBadgeVariant(station.status)}> {/* Status badge */}
              {station.id}
            </Badge>
            <div>
              <h1 className="display-4">{station.name}</h1> {/* Large heading */}
              <p>{station.description}</p> {/* Move description to the top */}
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4"> {/* Content container */}
        <div className="col-md-6"> {/* Left column */}
          <ul className="list-unstyled">
            <li className="mb-3 bg-light"> {/* Location with grey background */}
              <h5>{t('location')}:</h5>
              <ul className="list-unstyled">
                <li><b>{t('latitude')}:</b> {station.lat}</li>
                <li><b>{t('longitude')}:</b> {station.lng}</li>
                <li><b>{t('altitude')}:</b> {station.altitude} m</li>
              </ul>
            </li>
            <li className="mb-3 bg-light"> {/* Activity with grey background */}
              <h5>{t('activity')}:</h5>
              <ul className="list-unstyled">
                <li><b>{t('lastSeen')}:</b> {moment(station.last_seen).format('LLL')}</li>
                <li><b>{t('created')}:</b> {moment(station.created).format('LLL')}</li>
              </ul>
            </li>
            <li className="mb-3"> {/* Observations */}
              <h5>{t('observations')}:</h5>
              <p>{station.observations}</p>
            </li>
          </ul>
        </div>
        <div className="col-md-6"> {/* Right column */}
          <img src={station.image} alt={`Station: ${station.name}`} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Station;

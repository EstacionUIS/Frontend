import React, { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import { useTranslation } from 'react-i18next';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import { getSatelliteByNoradId } from '../../../api/satnogsAPI'; 

import sat from '../../../../public/Imagessat_purple.png'; 

function Entry({ observation }) {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [satelliteData, setSatelliteData] = useState(null);

    useEffect(() => {
        const fetchSatelliteData = async () => {
            if (observation && observation.norad_cat_id) {
                const data = await getSatelliteByNoradId(observation.norad_cat_id);
                setSatelliteData(data);
            }
        };

        fetchSatelliteData();
    }, [observation]); // Run effect whenever observation changes

    if (!observation) {
        return null; 
    }

    let badgeVariant;
    switch (observation.status) {
        case 'future':
            badgeVariant = 'primary';
            break;
        case 'good':
            badgeVariant = 'success';
            break;
        case 'bad':
            badgeVariant = 'danger';
            break;
        case 'unknown':
            badgeVariant = 'warning';
            break;
        case 'failed':
            badgeVariant = 'secondary';
            break;
        default:
            badgeVariant = 'secondary';
    }

  const formattedDate = moment(observation.start).format('YYYY-MM-DD HH:mm:ss');
  
  const imageUrl = satelliteData ? `${VITE_MEDIA_URL}/${satelliteData.image}` : sat;
  const databaseUrl = `${VITE_SATELLITES_URL}/${observation.norad_cat_id}`; 

  return (
    <Card key={observation.id} className="mb-3">
      <Card.Header
        onClick={() => setOpen(!open)}
        aria-controls="observation-details"
        aria-expanded={open}
        style={{ cursor: 'pointer' }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <b>{t('Observations.Id')}:</b> {observation.id}, <b>{t('Observations.TimeStamp')}:</b> {formattedDate}
          </div>
          <div>
            <Badge bg={badgeVariant}>{t(`Observations.Status.${observation.status}`)}</Badge>
          </div>
        </div>
      </Card.Header>
      <Collapse in={open}>
                <div id="observation-details">
                    <Card.Body>
                        <div className="d-flex"> 
                            <div> 
                                {/* ... (your existing left section code) ... */}
                                <p><b>Status:</b> {satelliteData ? satelliteData.status : 'Loading...'}</p> {/* Display satellite status */}
                            </div>
                            <div> 
                                <Card>
                                    <Card.Body>
                                        <div className="d-flex flex-column align-items-center"> 
                                            <Card.Title>{observation.tle0 ? observation.tle0 : ''}</Card.Title>
                                            {imageUrl && <Card.Img variant="top" src={imageUrl} alt="Satellite Image" style={{ width: '150px' }} />} {/* Conditionally render image */}
                                            <a href={databaseUrl} target="_blank" rel="noopener noreferrer">
                                                View on SatNOGS DB
                                            </a>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Card.Body>
                </div>
            </Collapse>
    </Card>
  );
}

export default Entry;

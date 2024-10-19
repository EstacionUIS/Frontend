import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import { useTranslation } from 'react-i18next';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import moment from 'moment';

function Entry({ observation }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  // Check if observation is defined before accessing its properties
  if (!observation) {
    return null; // Or you could display a loading indicator or error message
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
            <div className="d-flex"> {/* Container for left and right sections */}
              <div> {/* Left section */}
                <p><b>Ground Station:</b> {observation.ground_station}</p>
                <p><b>NORAD CAT ID:</b> {observation.norad_cat_id}</p>
                {/* Add more details as needed */}
              </div>
              <div> {/* Right section */}
                <Card>
                  <Card.Body>
                    <div className="d-flex flex-column align-items-center"> {/* Changed to flex-column and added align-items-center */}
                      <Card.Title>{observation.tle0 ? observation.tle0 : ''}</Card.Title>
                      <Card.Img variant="top" src="..." alt="Satellite Image" style={{ width: '150px' }} /> {/* Added width for the image */}
                      <a href={`https://db.satnogs.org/satellites/${observation.norad_cat_id}`} target="_blank" rel="noopener noreferrer">
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



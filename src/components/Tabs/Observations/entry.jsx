import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import moment from 'moment'; 

function Entry({ observation }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

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

  const formattedDate = moment(observation.start).format('YYYY-MM-DD HH:mm:ss'); // Format the date

  return (
    <Card className="mb-3"> {/* Added Card component */}
      <Card.Header onClick={() => setOpen(!open)} aria-controls="observation-details" aria-expanded={open} style={{ cursor: 'pointer' }}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <b>{t('Observations.Id')}:</b> {observation.norad_cat_id} - {formattedDate}
          </div>
          <div>
            <Badge bg={badgeVariant}>{t(`Observations.Status.${observation.status}`)}</Badge>
          </div>
        </div>
      </Card.Header>
      <Collapse in={open}> {/* Added Collapse component */}
        <div id="observation-details">
          <Card.Body>
            <div className="d-flex"> {/* Container for the expanded view */}
              <div> {/* Left side: Observation details */}
                <p><b>{t('Observations.Start')}:</b> {observation.start}</p>
                <p><b>{t('Observations.End')}:</b> {observation.end}</p>
                {/* Add more details as needed */}
              </div>
              <div className="ms-auto"> {/* Right side: Satellite card */}
                <Card>
                  <Card.Img variant="top" src={`https://db.satnogs.org/media/transmitters/${observation.transmitter_uuid}/thumb.png`} alt={observation.transmitter_description} /> {/* Replace with actual image URL */}
                  <Card.Body>
                    <Card.Title>{observation.transmitter_description}</Card.Title> {/* Satellite name */}
                    <a href={`https://db.satnogs.org/transmitters/${observation.transmitter_uuid}`} target="_blank" rel="noopener noreferrer">
                      {t('Observations.MoreInfo')}
                    </a>
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

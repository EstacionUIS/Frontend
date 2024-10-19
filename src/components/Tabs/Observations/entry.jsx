import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import { useTranslation } from 'react-i18next';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import moment from 'moment'; // Assuming you have moment.js installed

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
    <Card key={observation.id} className="mb-3"> {/* Added Card component */}
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
      <Collapse in={open}> {/* Added Collapse component */}
        <div id="observation-details">
          <Card.Body>
            <div className="d-flex"> {/* Container for left and right sections */}
              <div> {/* Left section */}
                {/* ... other observation details you want to display */}
                <p><b>Ground Station:</b> {observation.ground_station}</p>
                <p><b>NORAD CAT ID:</b> {observation.norad_cat_id}</p>
                {/* Add more details as needed */}
              </div>
              <div> {/* Right section */}
                <Card>
                  <Card.Body>
                    <div> {/* Container for satellite name, image, and link */}
                      <Card.Title>{observation.tle0}</Card.Title> {/* Satellite name */}
                      <Card.Img variant="top" src="..." alt="Satellite Image" /> {/* Replace with actual image URL */}
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

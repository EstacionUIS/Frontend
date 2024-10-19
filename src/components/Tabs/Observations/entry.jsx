import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs'; // Import dayjs for date formatting

function Entry({ observation }) {
  const { t } = useTranslation();

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

  // Format the date using dayjs
  const formattedDate = dayjs(observation.start).format('YYYY-MM-DD HH:mm:ss');

  return (
    <Accordion>
      <Accordion.Item eventKey={observation.id}>
        <Accordion.Header>
          <Badge bg={badgeVariant}>{t(`Observations.Status.${observation.status}`)}</Badge>{' '}
          {observation.norad_cat_id} - {formattedDate}
        </Accordion.Header>
        <Accordion.Body>
          {/* Display detailed observation information here */}
          <p><b>{t('Observations.Id')}:</b> {observation.id}</p>
          <p><b>{t('Observations.TimeStamp')}:</b> {observation.start}</p>
          <p><b>{t('Observations.End')}:</b> {observation.end}</p>
          {/* Add more fields as needed */}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Entry;

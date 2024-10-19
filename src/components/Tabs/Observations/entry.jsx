import React from 'react';
import Badge from 'react-bootstrap/Badge'; 
import { useTranslation } from 'react-i18next';

function Entry({ observation }) {
    const { t } = useTranslation();

    let badgeVariant;
    switch (observation.status) {
    case 'future':
        badgeVariant = 'primary'; // Blue
        break;
    case 'good':
        badgeVariant = 'success'; // Green
        break;
    case 'bad':
        badgeVariant = 'danger'; // Red
        break;
    case 'unknown':
        badgeVariant = 'warning'; // Orange
        break;
    case 'failed':
        badgeVariant = 'secondary'; // Grey
        break;
    default:
        badgeVariant = 'secondary'; // Default to grey if status is not recognized
    }

    return (
    <li key={observation.id}>
        {/* Display relevant observation details */}
        <b>{t('Observations.Id')}:</b> {observation.id}, <Badge bg={badgeVariant}>{t(`Observations.Status.${observation.status}`)}</Badge>, <b>{t('Observations.TimeStamp')}:</b> {observation.start}
    </li>
    );
}

export default Entry;

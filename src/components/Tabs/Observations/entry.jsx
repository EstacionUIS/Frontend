import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { useTranslation } from 'react-i18next';

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

    return (
        <li key={observation.id}>
            {/* Display relevant observation details */}
            <b>{t('Observations.Id')}:</b> {observation.id}, <Badge bg={badgeVariant}>{t(`Observations.Status.${observation.status}`)}</Badge>, <b>{t('Observations.TimeStamp')}:</b> {observation.start}<br />
            <b>{t('Observations.Station')}:</b> {observation.station_name} ({observation.station_lat}, {observation.station_lng})<br />
            <b>{t('Observations.Satellite')}:</b> {observation.norad_cat_id} - {observation.tle0}<br />
            <b>{t('Observations.Transmitter')}:</b> {observation.transmitter_description} ({observation.transmitter_mode})
        </li>
    );
}

export default Entry;

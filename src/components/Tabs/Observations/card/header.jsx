import React from 'react';
import { useTranslation } from 'react-i18next';
import Badge from 'react-bootstrap/Badge';
import moment from 'moment';

function Header({ observation }) { // Receive t function as prop
    const { t } = useTranslation();

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

    return (
        <div className="d-flex flex-column">
            <div>
                <b>{t('Observations.Id')}:</b> {observation.id}
            </div>
            <div>
                <b>{t('Observations.TimeStamp')}:</b> {formattedDate}
            </div>
            <div>
                <Badge bg={badgeVariant}>
                    {t(`Observations.Status.${observation.status}`)}
                </Badge>
            </div>
        </div>
    );
}

export default Header;

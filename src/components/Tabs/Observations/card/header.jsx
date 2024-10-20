import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import moment from 'moment';

function Header({ observation, open, setOpen }) {
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
        <Card.Header
            onClick={() => setOpen(!open)}
            aria-controls="observation-details"
            aria-expanded={open}
            style={{ cursor: 'pointer' }}
        >
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
        </Card.Header>
    );
}

export default Header;

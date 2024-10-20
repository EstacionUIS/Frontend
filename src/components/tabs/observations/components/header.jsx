import React from 'react';
import { useTranslation } from 'react-i18next';

import moment from 'moment';

import Badge from 'react-bootstrap/Badge';

function Header({ observation }) {

    if(!observation) {
        return null;
    }

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
    
    const formattedDate = moment(observation.start).format('LLL');
    
    return (
        <div className="d-flex flex-column">
            <div>
                <b>{t('Observations.StatusTitle')}: </b> 
                <Badge bg={badgeVariant}>
                    <b>{t(`Observations.Status.${observation.status}`)}</b>
                </Badge>
            </div>  
            <div>
                <b>{t('Observations.Id')}:</b> {observation.id}
            </div>
            <div>
                <b>{t('Observations.TimeStamp')}:</b> {formattedDate}
            </div>            
        </div>  
    );
}

export default Header;

import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';
import Badge from 'react-bootstrap/Badge';
import moment from 'moment';

import Body from './card/body'; 

function Entry({ observation }) {

    const { t } = useTranslation();
 
    const [open, setOpen] = useState(false);

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

    const formattedDate = moment(observation.start).format('LLL');
    
    return (
        <Card key={observation.id} className="mb-3">
            <Card.Header 
                onClick={() => setOpen(!open)}
                aria-controls="observation-details"
                aria-expanded={open}
                style={{ cursor: 'pointer' }}
            >         
            <div className="d-flex flex-column">
            <div>
                <b>{t('Observations.StatusTitle')}</b>:<b> </b>
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
            </Card.Header>
            <Collapse in={open}>
                <Card.Body> 
                    <Body observation={observation} />  {/* No need to pass isLoading */}
                </Card.Body>
            </Collapse>
        </Card>
    );
}

export default Entry;

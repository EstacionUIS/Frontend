import React, { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import Collapse from 'react-bootstrap/Collapse';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

import { getSatelliteByNoradId } from '../../../api/satnogsAPI'; 

import sat from '../../../../public/Images/sat_purple.png'; 

function Entry({ observation }) {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [satelliteData, setSatelliteData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSatelliteData = async () => {
            setIsLoading(true);
            try {
                if (observation && observation.norad_cat_id) {
                    const data = await getSatelliteByNoradId(observation.norad_cat_id);
                    setSatelliteData(data);
                }
            } catch (err) {
                setError(err); 
            } finally {
                setIsLoading(false);
            }
        };
    
        fetchSatelliteData();
    }, [observation]);

    if (error) {
        return <div>{t('Error')}: {error.message}</div>;
    }

    if (isLoading) {
        return ( 
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">{t('loading')}...</span>  
    
                </Spinner>
            </div>
        );
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

    const imageUrl = satelliteData ? `${import.meta.env.VITE_MEDIA_URL}/${satelliteData.image}` : sat;
    const databaseUrl = `${import.meta.env.VITE_SATELLITES_URL}/${observation.sat_id}`; 

    const satelliteStatus = satelliteData ? satelliteData.status : null; // Get satellite status
    let badgeStatusVariant = satelliteStatus === 'alive' ? 'success' : 'danger'; 

    return (
        <Card key={observation.id} className="mb-3">
            <Card.Header
                onClick={() => setOpen(!open)}
                aria-controls="observation-details"
                aria-expanded={open}
                style={{ cursor: 'pointer' }}
            >
                <div className="d-flex justify-content-between align-items-center"> 
                    <div className="d-flex flex-column align-items-center"> {/* Center content vertically */}
                        <div>
                            <b>{t('Observations.Id')}:</b> {observation.id}, <b>{t('Observations.TimeStamp')}:</b> {formattedDate}
                        </div>
                        <div>
                            <Badge bg={badgeVariant}>{t(`Observations.Status.${observation.status}`)}</Badge>
                        </div>
                    </div>
                </div>
            </Card.Header>
            <Collapse in={open}>
                <div id="observation-details">
                    <Card.Body>
                        <div className="d-flex justify-content-between"> {/* Distribute content to left and right */}
                            <div className="d-flex flex-column align-items-start w-50"> {/* Container to the left, content aligned to the start */}
                                {/* ... (your existing left section code) ... */}
                                <p>
                                    <b>Status:</b> {satelliteStatus ? 
                                        <Badge bg={badgeStatusVariant}>{satelliteStatus}</Badge> : 
                                        'Loading...'
                                    }
                                </p> 
                            </div>
                            <div className="w-50 d-flex justify-content-end"> {/* Container to the right */}
                                <Card>
                                    <Card.Body>
                                        <div className="d-flex flex-column align-items-center"> 
                                            <Card.Title>{observation.tle0 ? observation.tle0 : ''}</Card.Title>
                                            {imageUrl && <Card.Img variant="top" src={imageUrl} alt="Satellite Image" style={{ width: '150px' }} />}
                                            <a href={databaseUrl} target="_blank" rel="noopener noreferrer">
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

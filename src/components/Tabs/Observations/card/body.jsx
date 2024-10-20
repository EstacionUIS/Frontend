import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { useTranslation } from 'react-i18next';

import sat from '../../../../../public/Images/sat_purple.png';
import { getSatelliteByNoradId } from '../../../../api/satnogsAPI';

function Body({ observation }) { // Receive isLoading prop

    const { t } = useTranslation();

    const [satelliteData, setSatelliteData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchSatelliteData = async () => {
            if (observation && observation.norad_cat_id) {
                try {
                    const data = await getSatelliteByNoradId(observation.norad_cat_id);
                    setSatelliteData(data[0]);
                } catch (error) {
                    console.error("Error fetching satellite data:", error);
                    // Consider setting an error state to display to the user
                } finally {
                    setIsLoading(false);
                }
            }
        };

        fetchSatelliteData();
    }, [observation]); 

    if (!observation) {
        return null; 
    }

    if (isLoading) {
        return ( 
            <div className="d-flex justify-content-center align-items-center vh-100"> {/* Center the spinner */}
                <Spinner animation="border" role="status"> {/* Display the spinner */}
                    <span className="visually-hidden">{t('loading')}...</span>
                </Spinner>
            </div>
        );
    }
    
    const imageUrl = satelliteData?.image
        ? `${import.meta.env.VITE_MEDIA_URL}/${satelliteData.image}`
        : sat;
    const databaseUrl = `${import.meta.env.VITE_SATELLITES_URL}/${satelliteData.sat_id}`;

    return (
                        <Card>
                            <Card.Body>
                                <div className="d-flex flex-column align-items-center">
                                    <Card.Img
                                        variant="top"
                                        src={imageUrl}
                                        alt="Satellite Image"
                                        style={{ width: '150px' }}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = sat;
                                        }}
                                    />                              
                                    <Card.Title>
                                        {satelliteData.name}
                                    </Card.Title>
                                    <Card.Text>
                                        {satelliteData.citation} 
                                    </Card.Text>
                                    <Card.Link href={databaseUrl}>
                                        {t('Observations.link')}
                                    </Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
    );
}

export default Body;

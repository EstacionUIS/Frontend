import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';
import Flagpack from 'react-flagpack';

import sat from '../../../../../public/images/sat_purple.png';
import { getSatelliteByNoradId } from '../../../../api/satnogsAPI';

function Body({ observation }) { // Receive isLoading prop

    const { t } = useTranslation();

    const [satelliteData, setSatelliteData] = useState(null);
    
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
    
    const imageUrl = satelliteData?.image
        ? `${import.meta.env.VITE_MEDIA_URL}/${satelliteData.image}`
        : sat;
    const databaseUrl = `${import.meta.env.VITE_SATELLITES_URL}/${satelliteData.sat_id}`;

    return (
        <Card>
            <Card.Body>
                <div className="d-flex flex-column align-items-center">
                    <Card.Img variant="top" src={imageUrl} alt={t('Observations.ImgAlt')} style={{ width: '150px' }}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = sat;
                        }}
                    />                              
                    <Card.Title>
                        <div>
                            <div>{satelliteData.name}</div>
                            <div>
                                { satelliteData?.countries && satelliteData.countries.size > 0 ? 
                                    [satelliteData.countries].map((code) => (
                                        <Flagpack
                                            key={code} code={code} size='medium'
                                        />
                                    ))
                                    : "N/A"
                                }
                            </div>
                        </div>
                    </Card.Title>
                    <Card.Link href={databaseUrl}>
                        {t('Observations.Link')}
                    </Card.Link>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Body;

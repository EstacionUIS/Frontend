import React from 'react';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';
import Flagpack from 'react-flagpack';

import sat from '../../../../../public/images/sat_purple.png';

function Body({ satelliteData }) { // Receive isLoading prop

    const { t } = useTranslation();

    const imageUrl = satelliteData?.image
        ? `${import.meta.env.VITE_MEDIA_URL}/${satelliteData.image}`
        : sat;
    const databaseUrl = `${import.meta.env.VITE_SATELLITES_URL}/${satelliteData.sat_id}`;

    return (
        <Card>
            <Card.Body>
                <div className="d-flex flex-column align-items-center">
                          
                    <Card.Title>
                        <div>
                            <div>{satelliteData.name}</div>
                            <div>
                                { (satelliteData.countries && satelliteData.countries.size > 0) ? 
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

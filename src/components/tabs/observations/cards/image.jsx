import React from 'react';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';
import { Flag } from 'react-flagpack';

import sat from '../../../../../public/images/sat_purple.png';

function Image({ satelliteData }) {
    if (!satelliteData) {
        return null;
    }

    const { t } = useTranslation();

    const imageUrl = satelliteData?.image
        ? `${import.meta.env.VITE_MEDIA_URL}/${satelliteData.image}`
        : sat;
    const databaseUrl = `${import.meta.env.VITE_SATELLITES_URL}/${satelliteData.sat_id}`;

    return (
        <Card className="text-center"> {/* Center card content */}
            <Card.Img variant="top" src={imageUrl} alt={t('Observations.ImgAlt')} style={{ width: '150px', margin: '0 auto' }}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = sat;
                }}
            />
            <Card.Title>
                <div>
                    <div>{satelliteData.name}</div>
                    <div className="d-flex justify-content-center"> {/* Center flags */}
                        {satelliteData?.countries ? (
                            satelliteData.countries.map((countryCode, index) => (
                                <div>
                                    <Flag key={index} code={countryCode} size='MEDIUM' />
                                </div>
                            ))
                        ) : (
                            "N/A"
                        )}
                    </div>
                </div>
            </Card.Title>
            <Card.Link href={databaseUrl}>
                {t('Observations.Link')}
            </Card.Link>
        </Card>
    );
}

export default Image;

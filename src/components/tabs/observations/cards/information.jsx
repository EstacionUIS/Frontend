import React from 'react';
import { Button } from 'bootstrap';
import Card from 'react-bootstrap/Card';

import { useTranslation } from 'react-i18next';


function Information({ satelliteData }) { 

    if (!satelliteData) {
        return null;
    }

    const { t } = useTranslation();

    return (
        <Card>
            <Card.Body>
                <div>
                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-between">
                            <p><b>{t('Observations.Satellite.Name')}:</b></p>
                            <p>{satelliteData.name || 'N/A'}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p><b>{t('Observations.Satellite.AlternativeNames')}:</b></p>
                            <p>{satelliteData.names || 'N/A'}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p><b>{t('Observations.Satellite.Id')}:</b></p>
                            <p>{satelliteData.sat_id || 'N/A'}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p><b>{t('Observations.Satellite.NoradId')}:</b></p>
                            <p>{satelliteData.norad_cat_id || 'N/A'}</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p><b>{t('Observations.Satellite.Country')}:</b></p>
                            <pre>{JSON.stringify(satelliteData.countries, null, 2)}</pre>
                        </div>
                    </div>
                </div>
            </Card.Body>
            <Card.Link href={observation.website} >
                {t('Observations.Website')}
            </Card.Link>
        </Card>
    );
}

export default Information;


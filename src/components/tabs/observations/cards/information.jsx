import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

import { useTranslation } from 'react-i18next';

import { getSatelliteDescriptionByNoradId } from '../../../../api/satnogsDB';

function Information({ satelliteData }) { 

    if (!satelliteData) {
        return null;
    }

    const { t } = useTranslation();

    const [description, setDescription] = useState(null);
    const [error, setError] = useState(null);    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getSatelliteDescriptionByNoradId(satelliteData.sat_id);
            setDescription(data);
          } catch (error) {
            setError(error);
          }
        };
    
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if(!description) {
        return null;
    }

    console.log(description);

    return (
        <Card>
            <Card.Body>
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
                    <div className="d-flex justify-content-between">
                        <a href={satelliteData.website} target="_blank" rel="noopener noreferrer">
                            {t('Observations.Satellite.Website') || 'N/A'}
                        </a>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Information;


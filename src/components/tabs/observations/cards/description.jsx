import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { useTranslation } from 'react-i18next';

import { getSatelliteDescriptionByNoradId } from '../../../../api/satnogsDB';

function Description({ satelliteData }) {

    if (!satelliteData) {
        return null;
    }

    const { t } = useTranslation();

    const [description, setDescription] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getSatelliteDescriptionByNoradId(satelliteData.sat_id);
            setDescription(data);
          } catch (error) {
            setError(error);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchData();
    }, []);

    if (error) {
        return <div>t{('Error')}: {error.message}</div>;
      }

    return (
        <Card className="text-center">
            { isLoading?
                <div>
                    <Card.Body>
                        <div className="d-flex justify-content-center align-items-center vh-100"> {/* Center the spinner */}
                            <Spinner animation="border" role="status"> {/* Display the spinner */}
                                <span className="visually-hidden">{t('Loading')}...</span>
                            </Spinner>
                        </div> 
                    </Card.Body>
                </div>
                : <div> 
                    <Card.Title>
                        {t('Observations.Description')}
                    </Card.Title>
                    <Card.Body>
                    <div>
                        <p>{description.Description}</p>
                    </div>
                    </Card.Body>
                </div> 
            }
        </Card>
    );

}

export default Description;

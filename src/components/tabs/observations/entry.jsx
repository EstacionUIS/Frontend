import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

import Header from './components/header';

import Image from './cards/image';
import Information from './cards/information';
import Description from './cards/description';

import { getSatelliteByNoradId } from '../../../api/satnogsAPI';

function Entry({ observation }) {

    if (!observation) {
        return null;
    }

    const { t } = useTranslation();
 
    const [open, setOpen] = useState(false);
    const [satelliteData, setSatelliteData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getSatelliteByNoradId(observation.norad_cat_id);
            setSatelliteData(data[0]);
          } catch (error) {
            setError(error);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Card key={observation.id} className="mb-3">
            {/* ... (Card.Header code) */}
            <Collapse in={open}>
                <Card.Body className="d-flex flex-column align-items-center justify-content-center"> 
                    { isLoading ? 
                        <div className="d-flex justify-content-center align-items-center vh-100"> 
                            <Spinner animation="border" role="status"> 
                                <span className="visually-hidden">{t('Loading')}...</span>  
                            </Spinner>
                        </div> 
                        : <div className="d-flex flex-row mt-3"> 
                            <div><Information satelliteData={ satelliteData } /></div>
                            <div><Image satelliteData={ satelliteData } /></div>
                            <div><Description satelliteData={satelliteData} /> </div>
                        </div> 
                    }
                </Card.Body>
            </Collapse>
        </Card>
    );
} 

export default Entry;

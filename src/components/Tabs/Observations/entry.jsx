import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';

import Header from './Components/header';
import Image from './Cards/image';

import { getSatelliteByNoradId } from '../../../Api/satnogsAPI';

function Entry({ observation }) {

    const { t } = useTranslation();
 
    const [open, setOpen] = useState(false);
    const [satelliteData, setSatelliteData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getSatelliteByNoradId(observation.norad_cat_id);
            setSatelliteData(data);
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

    if (!observation) {
        return null;
    }
 
    return (
        <Card key={observation.id} className="mb-3">
            <Card.Header 
                onClick={() => setOpen(!open)}
                aria-controls="observation-details"
                aria-expanded={open}
                style={{ cursor: 'pointer' }}
            >                       
                <Header observation={observation} />
            </Card.Header>
            <Collapse in={open}>
                <Card.Body> 
                    <div className="d-flex flex-row">
                        <Image observation={observation} />
                    </div>
                </Card.Body>
            </Collapse>
        </Card>
    );
}

export default Entry;

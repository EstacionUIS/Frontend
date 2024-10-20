import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';

import { getSatelliteByNoradId } from '../../../api/satnogsAPI'; 

import Header from './card/header'; 
import Body from './card/body'; 

function Entry({ observation }) {
    const { t } = useTranslation();
    
    const [open, setOpen] = useState(false);
    const [satelliteData, setSatelliteData] = useState(null);

    useEffect(() => {
        const fetchSatelliteData = async () => {
            if (observation && observation.norad_cat_id) {
                try {
                    const data = await getSatelliteByNoradId(observation.norad_cat_id);
                    setSatelliteData(data);
                } catch (error) {
                    console.error("Error fetching satellite data:", error);
                    // Consider setting an error state to display to the user
                }
            }
        };

        fetchSatelliteData();
    }, [observation]); 

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
                    <Body observation={observation} />  {/* No need to pass isLoading */}
                </Card.Body>
            </Collapse>
        </Card>
    );
}

export default Entry;

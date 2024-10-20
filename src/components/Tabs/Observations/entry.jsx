import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';

import { getSatelliteByNoradId } from '../../../api/satnogsAPI'; 

import Header from './card/header'; // Import the new Header component
import Body from './card/body'; // Import the new Body component

function Entry({ observation }) {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [satelliteData, setSatelliteData] = useState(null);

    useEffect(() => {
        const fetchSatelliteData = async () => {
            if (observation && observation.norad_cat_id) {
                const data = await getSatelliteByNoradId(observation.norad_cat_id);
                setSatelliteData(data);
            }
        };

        fetchSatelliteData();
    }, [observation]); // Run effect whenever observation changes

    if (!observation) {
        return null; 
    }

    return (
        <Card key={observation.id} className="mb-3">
            <Header
                observation={observation}
                open={open}
                setOpen={setOpen}
            />
            <Collapse in={open}>
                <Body observation={observation} satelliteData={satelliteData} />
            </Collapse>
        </Card>
    );
}

export default Entry;

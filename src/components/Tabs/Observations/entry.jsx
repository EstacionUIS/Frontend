import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';

import Header from './card/header'; 
import Body from './card/body'; 

function Entry({ observation }) {
    
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

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

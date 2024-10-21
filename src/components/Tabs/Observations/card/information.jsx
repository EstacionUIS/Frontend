import React from 'react';
import Card from 'react-bootstrap/Card';

function Information({ satelliteData }) { 
    if (!satelliteData) {
        return null;
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>Mission Information</Card.Title>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between">
                        <p><b>Name:</b></p>
                        <p>{satelliteData.name || 'N/A'}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p><b>Alternate Names:</b></p>
                        <p>{satelliteData.names || 'N/A'}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p><b>Satellite ID:</b></p>
                        <p>{satelliteData.sat_id || 'N/A'}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p><b>NORAD ID:</b></p>
                        <p>{satelliteData.norad_cat_id || 'N/A'}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p><b>Website:</b></p>
                        <a href={satelliteData.website} target="_blank" rel="noopener noreferrer">
                            {satelliteData.website || 'N/A'}
                        </a>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p><b>Country of Origin:</b></p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Information;


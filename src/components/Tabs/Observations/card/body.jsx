import React from 'react';
import Card from 'react-bootstrap/Card';

import sat from '../../../../../public/Images/sat_purple.png';

function Body({ observation, satelliteData }) {
    const imageUrl = satelliteData?.image
        ? `${import.meta.env.VITE_MEDIA_URL}/${satelliteData.image}`
        : sat;
    const databaseUrl = `${import.meta.env.VITE_SATELLITES_URL}/${observation.sat_id}`;

    return (
        <div id="observation-details">
            <Card.Body>
                <div className="d-flex justify-content-center">
                    <div>
                        <p>
                            <b>Status:</b> {satelliteData ? satelliteData.status : 'Loading...'}
                        </p>
                        <Card>
                            <Card.Body>
                                <div className="d-flex flex-column align-items-center">
                                    <Card.Title>
                                        {observation.tle0 ? observation.tle0 : ''}
                                    </Card.Title>
                                    <Card.Img
                                        variant="top"
                                        src={imageUrl}
                                        alt="Satellite Image"
                                        style={{ width: '150px' }}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = sat;
                                        }}
                                    />
                                    <a
                                        href={databaseUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View on SatNOGS DB
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Card.Body>
        </div>
    );
}

export default Body;

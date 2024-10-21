import React from 'react';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';

function Demoddata({ observation }) {

    if (!observation) {
        return null;
    }

    const { t } = useTranslation();

    return (
        <Card className="text-center"> {/* Center card content */}
            { observation.demoddata? 
                <Card.Img variant="top" src={observation.demoddata[0]} alt="Waterfall" style={{ width: '150px', margin: '0 auto' }} />
                : 
                <div>
                    {t('Observations.NoDataFound')}
                </div>
            }
            <Card.Title>
                {t('Observations.ImageData')}
            </Card.Title>
        </Card>
    );
}

export default Demoddata;

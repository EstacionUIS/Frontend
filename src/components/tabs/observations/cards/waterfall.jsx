import React from 'react';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';

function Waterfall({ observation }) {

    if (!observation) {
        return null;
    }

    const { t } = useTranslation();

    return (
        <Card className="text-center"> {/* Center card content */}
            { observation.waterfall? 
                <Card.Img variant="top" src={observation.waterfall} alt="Waterfall" style={{ width: '150px', margin: '0 auto' }} />
                : 
                <div>
                    {t('Observations.WaterfallNotFound')}
                </div>
            }
            <Card.Title>
                Waterfall
            </Card.Title>
        </Card>
    );
}

export default Waterfall;

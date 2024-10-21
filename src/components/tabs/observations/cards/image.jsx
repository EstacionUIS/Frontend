import React from 'react';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';
import Flagpack from 'react-flagpack';

import sat from '../../../../../public/images/sat_purple.png';

function Image({ satelliteData }) { 

    return (
        <div>
            <pre>{JSON.stringify(satelliteData, null, 2)}</pre>
        </div>
    );
}

export default Image;

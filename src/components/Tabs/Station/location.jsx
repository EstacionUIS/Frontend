import React from 'react';
import { useTranslation } from 'react-i18next';

function Location({ station }) {
    const { t } = useTranslation();

    return (
        <div className="card p-3 mb-3 rounded">
            <h5>{t('location')}</h5>
            <ul className="list-unstyled">
                <li><b>{t('latitude')}:</b> {station.lat}</li>
                <li><b>{t('longitude')}:</b> {station.lng}</li>
                <li><b>{t('altitude')}:</b> {station.altitude} m</li>
            </ul>
        </div>
    );
}

export default Location;

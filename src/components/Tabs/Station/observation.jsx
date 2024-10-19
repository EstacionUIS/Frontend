import React from 'react';
import { useTranslation } from 'react-i18next';

function Observation({ station }) {
    const { t } = useTranslation();

    return (
        <div className="card p-3 rounded"> {/* Observations box */}
            <h5>{t('Station.Observations.Title')}</h5>
            <ul className="list-unstyled"> {/* ... (last seen and created) */}
                <li><b>{t('Station.Observations.Number')}:</b> {station.observations}</li>
                <li><b>{t('Station.Observations.SuccessRate')}:</b> {station.success_rate}</li>
            </ul>
        </div>
    );
}

export default Observation;

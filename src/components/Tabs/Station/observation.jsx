import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

function Observation({ station }) {
    const { t } = useTranslation();

    return (
        <div className="card p-3 rounded"> {/* Observations box */}
            <h5>{t('Station.Observations.Title')}</h5>
            <ul className="list-unstyled"> {/* ... (last seen and created) */}
                <li><b>{t('Station.Observations.Number')}:</b> {moment(station.observations).format('LLL')}</li>
                <li><b>{t('Station.Observations.Success')}:</b> {moment(station.success_rate).format('LLL')}</li>
            </ul>
        </div>
    );
}

export default Observation;

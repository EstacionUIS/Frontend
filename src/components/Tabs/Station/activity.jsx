import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

function Activity({ station }) {
    const { t } = useTranslation();

    return (
        <div className="card p-3 mb-3 rounded">
            <h5>{t('Station.Activity.Title')}</h5>
            <ul className="list-unstyled">
                <li><b>{t('Station.Activity.LastSeen')}:</b> {moment(station.last_seen).format('LLL')}</li>
                <li><b>{t('Station.Activity.Created')}:</b> {moment(station.created).format('LLL')}</li>
            </ul>
        </div>
    );
}

export default Activity;

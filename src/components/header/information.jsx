import React from 'react';
import { useTranslation } from 'react-i18next';

function Information() {

    const { t } = useTranslation('FrontPage.Information'); 

    return (
        <div>
            <div>
                <b>{t('Title')}</b>
            </div>
            <div>
                <div>
                    {t('Content.Text1')}
                </div>
                <div>
                    {t('Content.Text2')}
                </div>
            </div>
        </div>
    );
}

export default Information;

import React from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {

    const { t } = useTranslation('FrontPage.Contact'); 

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
                <div>
                    {t('Content.Text3')}
                </div>
            </div>
        </div>
    );
}

export default Contact;

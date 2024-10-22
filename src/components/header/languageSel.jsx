import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {

    const { t, i18n } = useTranslation('FrontPage.Header.Language');

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
        <div>
            <b>{t('Title')}</b>
            <select className="form-select" value={i18n.language}
                onChange={(e) => 
                    changeLanguage(e.target.value)
                }
            >
                <option value="en">{t('Selection.En')}</option>
                <option value="es">{t('Selection.Es')}</option>
            </select>
        </div>
    );
}

export default LanguageSelector;

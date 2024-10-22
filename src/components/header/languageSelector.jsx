import React from 'react';
import { FlagIcon } from 'flagpack';
import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function LanguageSelector() {

  const { t, i18n } = useTranslation('FrontPage.Header.Language');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <DropdownButton variant="secondary" title={t('Title')} className="me-2">
      <Dropdown.Item onClick={() => changeLanguage('en')}>
        <FlagIcon code="GB" /> {t('Selection.En')}
      </Dropdown.Item>
      <Dropdown.Item onClick={() => changeLanguage('es')}>
        <FlagIcon code="ES" /> {t('Selection.Es')}
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default LanguageSelector;

import React from 'react';
import Flagpack from 'react-flagpack';
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
      <Flagpack code="GB" size='m' /> {t('Selection.En')}
      </Dropdown.Item>
      <Dropdown.Item onClick={() => changeLanguage('es')}>
        <Flagpack code="ES" size='m' /> {t('Selection.Es')}
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default LanguageSelector;

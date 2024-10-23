import React from 'react';
import Flagpack from 'react-flagpack';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';

function LanguageSelector() {

  const { t, i18n } = useTranslation("LanguageSelector");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Dropdown className="me-2" variant="transparent">
      <Dropdown.Toggle variant="transparent" id="theme-dropdown">
        {t("Title")}
      </Dropdown.Toggle>
      <Dropdown.Menu transition as={React.forwardRef(({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        return (
          <div ref={ref} 
            style={{ ...style, animation: 'slide-down 0.3s ease-out', }}
            className={className}
            aria-labelledby={labeledBy}
          >
            {children}
          </div>
        );
      })} >
        
        <Dropdown.Item onClick={() => changeLanguage('en')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}> 
            <Flagpack code="US" size="m" hasBorder={false} /> 
            {t("Content.English")}
          </div>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage('es')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}> 
            <Flagpack code="ES" size="m" hasBorder={false} /> 
            {t("Content.Spanish")}
          </div>
        </Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSelector;

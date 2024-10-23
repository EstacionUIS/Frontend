import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { BsSun, BsMoon, BsLaptop } from 'react-icons/bs';

import { useTranslation } from 'react-i18next';

function ThemeSelector() {

  const { t } = useTranslation("ThemeSelector");
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else if (theme === 'dark') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('light', 'dark');
    }
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
  }, []);

  return (
    <Dropdown className="me-2" variant="transparent">
      <Dropdown.Toggle variant="transparent" id="theme-dropdown">
        {theme === 'system' ? <BsLaptop /> : theme === 'light' ? <BsSun /> : <BsMoon />}
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
        
        <Dropdown.Item onClick={() => handleThemeChange('system')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BsLaptop /> {t("Content.System")}
          </div>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleThemeChange('light')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BsSun /> {t("Content.Light")}
          </div>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleThemeChange('dark')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BsMoon /> {t("Content.Dark")}
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ThemeSelector;

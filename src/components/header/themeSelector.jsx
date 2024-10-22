import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';

function ThemeSelector() {
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
    <Dropdown className="me-2">
      <Dropdown.Toggle variant="secondary" id="theme-dropdown">
        {theme === 'system' ? 'System' : theme === 'light' ? 'Light' : 'Dark'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleThemeChange('system')}>System</Dropdown.Item>
        <Dropdown.Item onClick={() => handleThemeChange('light')}>Light</Dropdown.Item>
        <Dropdown.Item onClick={() => handleThemeChange('dark')}>Dark</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ThemeSelector;

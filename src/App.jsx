import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useTranslation } from 'react-i18next';

import 'react-tabs/style/react-tabs.css';

import Station from './components/station';
import Observations from './components/observations';
import Information from './components/information';
import Contact from './components/contact';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container-fluid"> {/* Use container-fluid for full width */}
      <div className="row">
        <div className="col-12">
          <header className="d-flex justify-content-end align-items-center py-3"> {/* Header with flexbox for alignment */}
            <span className="me-2">{t('Language')}:</span> {/* Text for "Language" */}
            <select
              className="form-select"
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </header>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Information /> {/* Information component always visible */}
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Tabs>
            <TabList>
              <Tab>{t('Station')}</Tab>
              <Tab>{t('Observations')}</Tab>
            </TabList>

            <TabPanel>
              <Station />
            </TabPanel>
            <TabPanel>
              <Observations />
            </TabPanel>
          </Tabs>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Contact /> {/* Contact component always visible */}
        </div>
      </div>
    </div>
  );
}

export default App;

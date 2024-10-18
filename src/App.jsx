import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useTranslation } from 'react-i18next';

import 'react-tabs/style/react-tabs.css';

import About from './components/about';
import Station from './components/station';
import Observations from './components/observations';
import Information from './components/information';
import Contact from './components/contact';

import logo1 from '../public/Images/logo/logo1.png'; 
import logo2 from '../public/Images/logo/logo2.png'; 

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container-fluid">
      {/* Colored header with logos and language options */}
      <header className="bg-primary d-flex align-items-center py-3 px-4"> 
        <div className="d-flex align-items-center">
          <img src={logo1} alt="Logo 1" className="me-3" style={{ height: '50px' }} /> {/* Adjust height as needed */}
          <img src={logo2} alt="Logo 2" style={{ height: '50px' }} /> {/* Adjust height as needed */}
        </div>
        <div className="ms-auto"> {/* Push language options to the right */}
          <span className="me-2 text-white">{t('Language')}:</span>
          <select
            className="form-select"
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </header>

      {/* Information component */}
      <div className="row mt-4"> {/* Add margin-top for spacing */}
        <div className="col-12">
          <Information />
        </div>
      </div>

      {/* Tabs container with a bar and content space */}
      <div className="row mt-4">
        <div className="col-12">
          <Tabs>
            <div className="bg-light p-3"> {/* Bar for tabs */}
              <TabList>
                <Tab>{t('About')}</Tab> {/* New "About" tab */}
                <Tab>{t('Station')}</Tab>
                <Tab>{t('Observations')}</Tab>
              </TabList>
            </div>
            <div className="p-3"> {/* Content space */}
              <TabPanel>
                <About />
              </TabPanel>
              <TabPanel>
                <Station />
              </TabPanel>
              <TabPanel>
                <Observations />
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>

      {/* Contact component at the bottom */}
      <div className="row mt-4">
        <div className="col-12">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;

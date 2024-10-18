import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useTranslation } from 'react-i18next';

import Station from './components/station';
import Observations from './components/observations';
import Information from './components/information';
import Contact from './components/contact';

function App() {

  // i18n Language and Swap
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="container"> {/* Add a container for better layout */}
    
    <div className="row">
      <div className="col-md-12">
        {/* Language selection dropdown */}
        <select
          className="form-select mt-3" // Apply Bootstrap form-select class
          value={i18n.language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </div>

    <Station />

    <div className="row">
      <div className="col-md-12">
        <Tabs>
          <TabList>
            <Tab>{t(Observations)}</Tab>
            <Tab>{t(Information)}</Tab>
            <Tab>{t(Contact)}</Tab>
          </TabList>

          <TabPanel>
            <Observations />
          </TabPanel>
          <TabPanel>
            <Information />
          </TabPanel>
          <TabPanel>
            <Contact />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  </div>

  );
}

export default App;

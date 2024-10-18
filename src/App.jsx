import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useTranslation } from 'react-i18next';

import 'react-tabs/style/react-tabs.css';

import Station from './components/station';
import Observations from './components/observations';
import Information from './components/information';
import Contact from './components/contact';

function App() {

  const {t} = useTranslation();

  return (
    <div>
      <Station /> {/* Station component always displayed on top */}
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
  );
}

export default App;

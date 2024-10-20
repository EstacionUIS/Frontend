import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useTranslation } from 'react-i18next';

import 'react-tabs/style/react-tabs.css';

// Tabs
import About from './tabs/about';
import Station from './tabs/station';
import Observations from './tabs/observations';

function Body() {
  const { t } = useTranslation();

  return (
    <div className="container mt-4 rounded bg-light p-4"> {/* Container with styling */}
      <Tabs>
        <div> 
          <TabList>
            <Tab>{t('About.Tab')}</Tab>
            <Tab>{t('Station.Tab')}</Tab>
            <Tab>{t('Observations.Tab')}</Tab>
          </TabList>
        </div>
        <div className="p-3"> 
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
  );
}

export default Body;

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useTranslation } from 'react-i18next';

import 'react-tabs/style/react-tabs.css';

// Tabs
import About from './Tabs/about';
import Station from './Tabs/station';
import Observations from './Tabs/observations';

function Body() {
  const { t } = useTranslation();

  return (
    <div className="container mt-4 rounded bg-light p-4"> {/* Container with styling */}
      <Tabs>
        <div> 
          <TabList>
            <Tab>{t('About')}</Tab>
            <Tab>{t('Station')}</Tab>
            <Tab>{t('Observations')}</Tab>
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

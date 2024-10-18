import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

import Station from './components/Station';
import Observations from './components/Observations';
import Information from './components/Information';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Station /> {/* Station component always displayed on top */}
      <Tabs>
        <TabList>
          <Tab>Observations</Tab>
          <Tab>Information</Tab>
          <Tab>Contact</Tab>
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

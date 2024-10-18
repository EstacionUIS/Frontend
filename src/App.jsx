import React, { useState } from 'react';

// Components
import Station from './components/station';
import Observations from './components/observations';
import Information from './components/information';
import Contact from './components/contact';

function App() {
  const [activeTab, setActiveTab] = useState('observations');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app-container">
      <div className="station-container">
        <Station />
      </div>

      <div className="tabs-container">
        <button onClick={() => handleTabClick('observations')}>
          Observations
        </button>
        <button onClick={() => handleTabClick('information')}>
          Information
        </button>
        <button onClick={() => handleTabClick('contact')}>Contact</button>
      </div>

      <div className="content-container">
        {activeTab === 'observations' && <Observations />}
        {activeTab === 'information' && <Information />}
        {activeTab === 'contact' && <Contact />}
      </div>
    </div>
  );
}

export default App;

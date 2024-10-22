import React, { useState } from 'react';

import Header from './components/header'; 
import Contact from './components/header/contact';
import Information from './components/header/information';
import Body from './components/body';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <header> 
        <Header activeTab={activeTab} onTabClick={handleTabClick} /> 
      </header>

      {activeTab === 'Home' && (
        <main> 
          <Contact />
          <Information />
          <Body />
        </main>
      )}
      {activeTab === 'About' && <div>Content for About tab</div>} 
      {activeTab === 'Station' && <div>Content for Station tab</div>}
      {activeTab === 'Observations' && <div>Content for Observations tab</div>}
    </div>
  );
}

export default App;

import React from 'react';

import logo1 from '/images/logo/logo1.png';
import logo2 from '/images/logo/logo2.png';

import LanguageSelector from './header/languageSel';

function Header({ activeTab, onTabClick }) {
  return (
    <div>
      <div>
        <img src={logo1} alt="Logo 1" className="me-3" style={{ height: '50px' }} />
        <img src={logo2} alt="Logo 2" style={{ height: '50px' }} />
      </div>
      <div> 
        <ul> {/* Basic unordered list for tabs */}
          <li onClick={() => onTabClick('Home')} className={activeTab === 'Home' ? 'active' : ''}>
            Home
          </li>
          <li onClick={() => onTabClick('About')} className={activeTab === 'About' ? 'active' : ''}>
            About
          </li>
          <li onClick={() => onTabClick('Station')} className={activeTab === 'Station' ? 'active' : ''}>
            Station
          </li>
          <li onClick={() => onTabClick('Observations')} className={activeTab === 'Observations' ? 'active' : ''}>
            Observations
          </li>
        </ul>
      </div>
      <div>
        <LanguageSelector />
      </div>
    </div>
  );
}

export default Header;
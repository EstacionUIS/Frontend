import React from 'react';

import logo1 from '/images/logo/logo1.png';
import logo2 from '/images/logo/logo2.png';

import LanguageSelector from './header/languageSel';

function Header() {

  return (
    <div>
      <div>
        <img src={logo1} alt="Logo 1" className="me-3" style={{ height: '50px' }} />
        <img src={logo2} alt="Logo 2" style={{ height: '50px' }} />
      </div>
      <div>
        <div><LanguageSelector /></div>
      </div>
    </div>
  );
}

export default Header;

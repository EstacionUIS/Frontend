import React from 'react';
import { useTranslation } from 'react-i18next';

import uis from '/images/logo/UISColor.png';
import e3t from '/images/logo/E3TColor.png';

function Logos() {
  const { t } = useTranslation("Logo");

  const uisUrl = 'https://www.uis.edu.co/';
  const e3tUrl = 'https://e3t.uis.edu.co/'; 

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}> 
      <a href={uisUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={uis}
          alt={t("uisAlt")}
          className="d-inline-block align-top" 
          style={{ height: '40px' }}
        />
      </a>
      <div style={{ borderLeft: '1px solid white', height: '50px' }}></div> 
      <a href={e3tUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={e3t}
          alt={t("e3tAlt")}
          className="d-inline-block align-top" 
          style={{ height: '40px' }}
        />
      </a>
    </div>
  );
}

export default Logos;

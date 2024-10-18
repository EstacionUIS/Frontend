import React from 'react';
import { useTranslation } from 'react-i18next';

// Sections
import Location from './About/location';
import Installation from './About/installation';

// Collapsible
import Software from './About/collapsible/software';
import Antenna from './About/collapsible/antenna';
import Raspberry from './About/collapsible/raspberry';
import Power from './About/collapsible/power';
import Enclosure from './About/collapsible/enclosure';

function About() {
  const { t } = useTranslation();

  return (
    <div className="container"> {/* Main container */}

      <div className="container rounded p-4"> {/* About container */}
        <h2 className="mt-4">{t('about.title')}</h2>
        <p>{t('about.description')}</p>
      </div>

      <Location /> 
      <Installation />

      <div className="container rounded p-4 mt-4"> {/* Collapsible container */}
        <Software />
        <Antenna />
        <Raspberry />
        <Power />
        <Enclosure />
      </div>
    </div>
  );
}

export default About;

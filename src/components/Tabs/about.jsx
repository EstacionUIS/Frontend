import React from 'react';
import { useTranslation } from 'react-i18next';

// Section
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
    <div className="container">

      {/* Header */}
      <div className="row">
        <div className="col-12">
          <h2 className="mt-4">About This Project</h2>
          <p>
            This project is designed to monitor and analyze environmental 
            conditions in real-time. It provides valuable data for research, 
            education, and public awareness.
          </p>
        </div>
      </div>

      {/* location */}
      <Location />

      {/* Installation and Materials */}
      <Installation />

      {/* Software (Collapsible) */}
      <Software />

      {/* Antenna (Collapsible) */}
      <Antenna />

      {/* Raspberry Pi (Collapsible) */}
      <Raspberry />

      {/* Power Source (Collapsible) */}
      <Power />

      {/* Enclosure (Collapsible) */}
      <Enclosure/>

    </div>
  );
}

export default About;

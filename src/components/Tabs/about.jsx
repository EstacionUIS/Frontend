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
      <div className="row">
        <div className="col-12"> 
          <div className="about-container rounded p-4"> {/* Add a container with rounded corners and padding */}
            <h2 className="mt-4">{t('about.title')}</h2> 
            <p>{t('about.description')}</p>

            <ul className="list-unstyled"> {/* Use a list for better organization */}
              <li><Location /></li>
              <li><Installation /></li>
              <li><Software /></li>
              <li><Antenna /></li>
              <li><Raspberry /></li>
              <li><Power /></li>
              <li><Enclosure /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

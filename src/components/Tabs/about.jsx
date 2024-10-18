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
          <div className="bg-light rounded p-3"> {/* Add a container with rounded corners and padding */}
            <h2 className="mt-4">{t('about.title')}</h2> 
            <p>{t('about.description')}</p>

            <ul className="list-unstyled"> {/* Use a list for better organization */}
              <li>
                <div className="bg-light rounded p-3">
                  <Location />
                </div>
              </li>
              <li>
                <div className="bg-light rounded p-3">
                  <Installation />
                </div>
                </li>
              <li>
                <div className="bg-light rounded p-3">
                  <Software />
                </div>
                </li>
              <li>
                <div className="bg-light rounded p-3">
                  <Antenna />
                </div>
                </li>
              <li>
                <div className="bg-light rounded p-3">
                  <Raspberry />
                </div>
                </li>
              <li>
                <div className="bg-light rounded p-3">
                  <Power />
                </div>
                </li>
              <li>
                <div className="bg-light rounded p-3">
                  <Enclosure />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

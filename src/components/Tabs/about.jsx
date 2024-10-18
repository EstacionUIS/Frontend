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
          <div className="bg-light rounded p-3"> 
            <h2 className="mt-4">{t('about.title')}</h2> 
            <p>{t('about.description')}</p>

            <ul className="list-unstyled"> 
              <li>
                <div className="bg-light rounded p-3 shadow-sm"> 
                  <Location />
                </div>
              </li>
              <li>
                <div className="bg-light rounded p-3 shadow-sm"> 
                  <Installation />
                </div>
              </li>
              <li>
                <div className="bg-light rounded p-3 shadow-sm"> 
                  <Software />
                </div>
              </li>
              <li>
                <div className="bg-light rounded p-3 shadow-sm"> 
                  <Antenna />
                </div>
              </li>
              <li>
                <div className="bg-light rounded p-3 shadow-sm"> 
                  <Raspberry />
                </div>
              </li>
              <li>
                <div className="bg-light rounded p-3 shadow-sm"> 
                  <Power />
                </div>
              </li>
              <li>
                <div className="bg-light rounded p-3 shadow-sm"> 
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

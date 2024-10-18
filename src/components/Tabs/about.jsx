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
      <div className="row justify-content-center"> {/* Center the entire content horizontally */}
        <div className="col-md-8"> {/* Adjust the column width as needed */}
          <div className="container rounded p-4">
            <h2 className="mt-4 text-center">{t('about.title')}</h2> {/* Center the title */}
            <p className="text-center">{t('about.description')}</p> {/* Center the description */}

            <div className="container"> {/* Container for Location and Installation */}
              <div className="row justify-content-center">
                <div className="col-md-6"> {/* Adjust column width as needed */}
                  <Location />
                  <Installation />
                </div>
              </div>
            </div>

            <div className="container mt-4"> {/* Container for the collapsible sections */}
              <div className="row justify-content-center">
                <div className="col-md-6"> {/* Adjust column width as needed */}
                  <Software />
                  <Antenna />
                  <Raspberry />
                  <Power />
                  <Enclosure />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

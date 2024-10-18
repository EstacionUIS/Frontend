import React from 'react';
import { useTranslation } from 'react-i18next';

import CollapsibleSection from './collapsible/collapsibleSection';

import raspberry from '../../../public/Images/station/raspberry.jpg'; 

function Raspberry() {

  const { t } = useTranslation();

  return (
    <CollapsibleSection title="Raspberry Pi"> {/* Use the CollapsibleSection */}
      <div className="row">
        <div className="col-md-6">
          <p>
            A Raspberry Pi serves as the central processing unit of the 
            monitoring station. It collects data from the sensors, processes 
            it, and transmits it to the server. Its low power consumption 
            and compact size make it ideal for this application.
          </p>
        </div>
        <div className="col-md-6">
            <img src={raspberry} alt="Raspberry Pi" className="img-fluid" />
        </div>
      </div>
    </CollapsibleSection>
  );
}

export default Raspberry;

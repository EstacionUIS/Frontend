import React from 'react';
import { useTranslation } from 'react-i18next';

import CollapsibleSection from '../../../Collapsible/collapsibleSection';

import power from '../../../../../public/Images/station/power.png'; 

function Power() {

  const { t } = useTranslation();

  return (
    <CollapsibleSection title="Power"> {/* Use the CollapsibleSection */}
      <div className="row">
        <div className="col-md-6">
          <p>
            The monitoring station is powered by a combination of solar panels 
            and a battery backup system. This ensures continuous operation, 
            even during periods of low sunlight or power outages
          </p>
        </div>
        <div className="col-md-6">
            <img src={power} alt="Power Source" className="img-fluid" />
        </div>
      </div>
    </CollapsibleSection>
  );
}

export default Power;

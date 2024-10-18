import React from 'react';
import { useTranslation } from 'react-i18next';

import CollapsibleSection from '../../../Collapsible/collapsibleSection';

import antenna from '../../../../../public/Images/station/station_2.jpg'; 

function Software() {

  const { t } = useTranslation();

  return (
    <CollapsibleSection title="Software"> {/* Use the CollapsibleSection */}
      <div className="row">
        <div className="col-md-6">
          <p>
            A high-gain antenna is used to ensure reliable data transmission 
            from the remote monitoring station to the central server. The 
            antenna is positioned for optimal signal strength and coverage.
          </p>
        </div>
        <div className="col-md-6">
          <img src={antenna} alt="Antenna" className="img-fluid" />
        </div>
      </div>
    </CollapsibleSection>
  );
}

export default Software;

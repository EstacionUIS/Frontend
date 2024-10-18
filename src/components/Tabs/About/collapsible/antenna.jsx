import React from 'react';
import { useTranslation } from 'react-i18next';

import CollapsibleSection from '../../../Collapsible/collapsibleSection';

import antenna from '../../../../../public/Images/station/station_2.jpg'; 

function Antenna() {
  const { t } = useTranslation("About");

  return (
    <CollapsibleSection title={t("Antenna.Title")}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 order-md-2">
                <img src={antenna} alt={t("Antenna.ImageAlt")} className="img-fluid" />
              </div>
              <div className="col-md-6 order-md-1">
                <p>{t("Antenna.Description")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
}

export default Antenna;

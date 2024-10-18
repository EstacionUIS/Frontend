import React from 'react';
import { useTranslation } from 'react-i18next';

import CollapsibleSection from '../../../Collapsible/collapsibleSection';

import raspberry from '../../../../../public/Images/station/raspberry.jpg'; 

function Raspberry() {
  const { t } = useTranslation("About");

  return (
    <CollapsibleSection title={t("RaspberryPi.Title")}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 order-md-2">
                <img src={raspberry} alt={t("RaspberryPi.ImageAlt")} className="img-fluid" />
              </div>
              <div className="col-md-6 order-md-1">
                <p>{t("RaspberryPi.Description")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
}

export default Raspberry;

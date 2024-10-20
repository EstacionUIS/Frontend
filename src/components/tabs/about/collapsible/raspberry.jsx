import React from 'react';
import { useTranslation } from 'react-i18next';

import CollapsibleSection from '../../../collapsible/collapsibleSection';

import raspberry from '../../../../../public/images/station/raspberry.jpg'; 

function Raspberry() {
  const { t } = useTranslation();

  return (
    <CollapsibleSection title={t("About.RaspberryPi.Title")}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 order-md-2">
                <img src={raspberry} alt={t("About.RaspberryPi.ImageAlt")} className="img-fluid" />
              </div>
              <div className="col-md-6 order-md-1">
                <p>{t("About.RaspberryPi.Description")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
}

export default Raspberry;

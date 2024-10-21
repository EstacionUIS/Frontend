import React from 'react';
import { useTranslation } from 'react-i18next';

import CollapsibleSection from '../../../collapsible/collapsibleSection';

import power from '../../../../../public/Images/station/power.png'; 

function Power() {
  const { t } = useTranslation();

  return (
    <CollapsibleSection title={t("About.Power.Title")}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 order-md-2">
                <img src={power} alt={t("About.Power.ImageAlt")} className="img-fluid" />
              </div>
              <div className="col-md-6 order-md-1">
                <p>{t("About.Power.Description")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
}

export default Power;

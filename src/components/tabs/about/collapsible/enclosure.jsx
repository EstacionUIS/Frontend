import React from 'react';
import { useTranslation } from 'react-i18next';

import CollapsibleSection from '../../../collapsible/collapsibleSection';

import enclosure from '../../../../../public/images/station/station_1.jpg'; // Make sure to import the correct image

function Enclosure() {
  const { t } = useTranslation();

  return (
    <CollapsibleSection title={t("About.Enclosure.Title")}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 order-md-2">
                <img src={enclosure} alt={t("About.Enclosure.ImageAlt")} className="img-fluid" /> {/* Use the enclosure image */}
              </div>
              <div className="col-md-6 order-md-1">
                <p>{t("About.Enclosure.Description")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
}

export default Enclosure;

import React from 'react';
import { useTranslation } from 'react-i18next';

import CollapsibleSection from '../../../collapsible/collapsibleSection';

import antenna from '/images/station/station_2.jpg'; 

function Software() {
  const { t } = useTranslation(); 

  return (
    <CollapsibleSection title={t("About.Software.Title")}> {/* Use translation for the title */}
      <div className="container"> {/* Container to center the content */}
        <div className="row justify-content-center">
          <div className="col-md-8"> {/* Adjust column width as needed */}
            <div className="row">
              <div className="col-md-6 order-md-2">
                <img src={antenna} alt={t("About.Software.ImageAlt")} className="img-fluid" /> 
              </div>
              <div className="col-md-6 order-md-1">
                <p>{t("About.Software.Description")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
}

export default Software;

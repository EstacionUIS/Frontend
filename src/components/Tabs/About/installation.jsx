import React from 'react';
import { useTranslation } from 'react-i18next';

import panel from '../../../../public/Images/station/station_1.jpg';

function Installation() {
  const { t } = useTranslation(); // Specify the namespace 

  return (
    <div className="container mt-4"> {/* Container to center the content */}
      <div className="row justify-content-center">
        <div className="col-md-8"> {/* Adjust column width as needed */}
          {/* Installation */}
          <div className="row">
            <div className="col-md-6 order-md-2"> {/* Image on the left for medium screens and above */}
              <img src={panel} alt={t("About.Installation.ImageAlt")} className="img-fluid" style={{ maxWidth: '60%' }} /> 
            </div>
            <div className="col-md-6 order-md-1"> {/* Text on the right for medium screens and above */}
              <h3>{t("About.Installation.Title")}</h3>
              <p>{t("About.Installation.Description")}</p>
            </div>
          </div>

          {/* Materials */}
          <div className="row mt-4">
            <div className="col-12">
              <h3>{t("About.Installation.MaterialsTitle")}</h3>
              <p>{t("About.Installation.MaterialsDescription")}</p>
              <ul>
                <li>{t("About.Installation.MaterialsList1")}</li>
                <li>{t("About.Installation.MaterialsList2")}</li>
                <li>{t("About.Installation.MaterialsList3")}</li>
                <li>{t("About.Installation.MaterialsList4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Installation;

import React from 'react';
import { useTranslation } from 'react-i18next';

import location from '../../../../public/Images/station/station_2.jpg';

function Location() {
  const { t } = useTranslation("About"); // Specify the namespace

  return (
    <div className="container mt-4"> {/* Container to center the content */}
      <div className="row justify-content-center">
        <div className="col-md-8"> {/* Adjust the column width as needed */}
          <div className="row">
            <div className="col-md-6 order-md-2"> {/* Image first on medium screens and larger */}
              <img src={location} alt={t("Location.ImageAlt")} className="img-fluid" style={{ maxWidth: '80%' }} /> 
            </div>
            <div className="col-md-6 order-md-1"> {/* Text second on medium screens and larger */}
              <h3>{t("Location.Title")}</h3>
              <p>{t("Location.Description")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;

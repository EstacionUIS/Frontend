import React from 'react';
import { useTranslation } from 'react-i18next';

import location from '../../../public/Images/station/station_2.jpg';

function Location() {

    const { t } = useTranslation();

    return(
    <div className="row mt-4">
        <div className="col-md-6 order-md-2"> {/* Image first on medium screens and larger */}
          <img src={location} alt="Location" className="img-fluid" style={{ maxWidth: '80%' }} />
        </div>
        <div className="col-md-6 order-md-1"> {/* Text second on medium screens and larger */}
          <h3>Location</h3>
          <p>
            The monitoring station is strategically located in a pristine natural 
            environment to capture accurate and representative data. It is 
            situated away from major sources of pollution and human activity 
            to minimize interference.
          </p>
        </div>
      </div>  
    )
}

export default Location;

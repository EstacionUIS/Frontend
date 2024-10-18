import React from 'react';
import { useTranslation } from 'react-i18next';

import panel from '../../../public/Images/station/station_1.jpg';

function Installation() {

    const { t } = useTranslation();

    return(

    <div className="row mt-4">
      
        {/* Installation */}
        <div className="col-md-6"> {/* Text on the left */}
            <h3>Installation</h3>
            <p>
            The installation process was carefully planned and executed to 
            ensure the stability and accuracy of the monitoring station. 
            The station was securely mounted and the sensors were calibrated 
            to provide reliable data.
            </p>
        </div>
        <div className="col-md-6"> {/* Image on the right */}
            <img src={panel} alt="Installation" className="img-fluid" style={{ maxWidth: '60%' }} />
        </div> 

        {/* Materials */}
        <div className="col-12">
          <h3>Materials</h3>
          <p>
            The station is constructed using high-quality, weather-resistant 
            materials to ensure durability and longevity. Key components 
            include:
            <ul>
              <li>Solar panels for power generation</li>
              <li>Sensors for data collection</li>
              <li>Data logger for storage and transmission</li>
              <li>Protective enclosure</li>
            </ul>
          </p>
        </div>
      </div>

    )
}

export default Installation;

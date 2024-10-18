import React from 'react';

import image1 from '../../public/Images/station/station_1.jpg';
import image2 from '../../public/Images/station/station_2.jpg';

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="mt-4">About This Project</h2>
          <p>
            {/* Replace with your project description */}
            This project is designed to monitor and analyze environmental 
            conditions in real-time. It provides valuable data for research, 
            education, and public awareness.
          </p>
        </div>
      </div>

      {/* Container with text and image */}
      <div className="row mt-4">
        <div className="col-md-6"> {/* Text on the left */}
          <h3>Location</h3>
          <p>
            {/* Replace with your location description */}
            The monitoring station is strategically located in a pristine natural 
            environment to capture accurate and representative data. It is 
            situated away from major sources of pollution and human activity 
            to minimize interference.
          </p>
        </div>
        <div className="col-md-6"> {/* Image on the right */}
          <img src={image1} alt="Location" className="img-fluid" />
        </div>
      </div>

      {/* Materials used */}
      <div className="row mt-4">
        <div className="col-12">
          <h3>Materials</h3>
          <p>
            {/* Replace with your materials description */}
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

      {/* Container with text and image */}
      <div className="row mt-4">
        <div className="col-md-6"> {/* Text on the left */}
          <h3>Installation</h3>
          <p>
            {/* Replace with your installation description */}
            The installation process was carefully planned and executed to 
            ensure the stability and accuracy of the monitoring station. 
            The station was securely mounted and the sensors were calibrated 
            to provide reliable data.
          </p>
        </div>
        <div className="col-md-6"> {/* Image on the right */}
          <img src={image2} alt="Installation" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default About;

import React, { useState } from 'react';

import panel from '../../public/Images/station/station_1.jpg';
import location from '../../public/Images/station/station_2.jpg';


function About() {
  const [isAntennaOpen, setIsAntennaOpen] = useState(false);
  const [isRaspberryOpen, setIsRaspberryOpen] = useState(false);
  const [isPowerOpen, setIsPowerOpen] = useState(false);

  return (
    <div className="container">
      {/* Header */}
      <div className="row">
        <div className="col-12">
          <h2 className="mt-4">About This Project</h2>
          <p>
            This project is designed to monitor and analyze environmental 
            conditions in real-time. It provides valuable data for research, 
            education, and public awareness.
          </p>
        </div>
      </div>

      {/* Location */}
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

      {/* Materials */}
      <div className="row mt-4">
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

      {/* Installation */}
      <div className="row mt-4">
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
      </div>

      {/* Antenna (Collapsible) */}
      <div className="row mt-4">
        <div className="col-12">
          <button 
            className="btn btn-primary" 
            onClick={() => setIsAntennaOpen(!isAntennaOpen)}
          >
            Antenna
          </button>
          {isAntennaOpen && (
            <div className="mt-3">
              <p>
                A high-gain antenna is used to ensure reliable data transmission 
                from the remote monitoring station to the central server. The 
                antenna is positioned for optimal signal strength and coverage.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Raspberry Pi (Collapsible) */}
      <div className="row mt-4">
        <div className="col-12">
          <button 
            className="btn btn-primary" 
            onClick={() => setIsRaspberryOpen(!isRaspberryOpen)}
          >
            Raspberry Pi
          </button>
          {isRaspberryOpen && (
            <div className="mt-3">
              <p>
                A Raspberry Pi serves as the central processing unit of the 
                monitoring station. It collects data from the sensors, processes 
                it, and transmits it to the server. Its low power consumption 
                and compact size make it ideal for this application.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Power Source (Collapsible) */}
      <div className="row mt-4">
        <div className="col-12">
          <button 
            className="btn btn-primary" 
            onClick={() => setIsPowerOpen(!isPowerOpen)}
          >
            Power Source
          </button>
          {isPowerOpen && (
            <div className="mt-3">
              <p>
                The monitoring station is powered by a combination of solar panels 
                and a battery backup system. This ensures continuous operation, 
                even during periods of low sunlight or power outages.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;

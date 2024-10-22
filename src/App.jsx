import React, { useState } from 'react';
import { Navbar, Nav, Container, Tabs, Tab } from 'react-bootstrap';

import logo1 from '/images/logo/logo1.png';
import logo2 from '/images/logo/logo2.png';

import Home from './components/tabs/home';
import About from './components/tabs/about';
import Station from './components/tabs/station';
import Observation from './components/tabs/station/observation';

import LanguageSelector from './components/header/languageSel';

function App() {
  
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg"> 
        <Container>
          <Navbar.Brand>
            <img
              src={logo1}
              alt="Logo 1"
              className="d-inline-block align-top me-2" 
              style={{ height: '50px' }}
            />
            <img
              src={logo2}
              alt="Logo 2"
              className="d-inline-block align-top"
              style={{ height: '50px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center"> 
            <Nav activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
              <Nav.Item>
                <Nav.Link eventKey="home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="station">Station</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="observation">Observations</Nav.Link> 
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <LanguageSelector /> 
        </Container>
      </Navbar>

      <Container> 
        <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
          <Tab eventKey="home" title="Home">
            <Home />
          </Tab>
          <Tab eventKey="about" title="About">
            <About />
          </Tab>
          <Tab eventKey="station" title="Station">
            <Station />
          </Tab>
          <Tab eventKey="observation" title="Observations"> 
            <Observation />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default App;

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import logo1 from '/images/logo/logo1.png';
import logo2 from '/images/logo/logo2.png';

import Home from './components/tabs/home';
import About from './components/tabs/about';
import Station from './components/tabs/station';
import Observation from './components/tabs/station/observation';

import LanguageSelector from './components/header/languageSelector';
import ThemeSelector from './components/header/themeSelector';

function App() {
  return (
    <BrowserRouter>
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
              <Nav>
                <Nav.Item>
                  <Nav.Link as={Link} to="/">Home</Nav.Link> 
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/station">Station</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/observation">Observations</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
            <LanguageSelector />
            <ThemeSelector />
          </Container>
        </Navbar>

        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/station" element={<Station />} />
            <Route path="/observation" element={<Observation />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;

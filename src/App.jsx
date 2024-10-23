import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Routes
import Home from './components/routes/home';
import About from './components/routes/about';
import Station from './components/routes/station';
import Observation from './components/routes/observations';
import Satellites from './components/routes/satellites';

// Logos
import Logos from './components/navbar/logos';

// Acessories
import LanguageSelector from './components/navbar/languageSelector';
import ThemeSelector from './components/navbar/themeSelector';

function App() {

  const { t } = useTranslation("Routes");

  return (
    <BrowserRouter>
      <div>

        <Navbar bg="primary" variant="dark" expand="lg" className="top-navbar"> 
          <Container>
            <Navbar.Brand>
              <Logos />
            </Navbar.Brand>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <LanguageSelector />
              <ThemeSelector />
            </div>
          </Container>
        </Navbar>

        <Navbar expand="lg" className="bottom-navbar">
          <Container>
            <Navbar.Toggle aria-controls="routes-navbar-nav" /> 
            <Navbar.Collapse id="routes-navbar-nav"> 
              <Nav>
                <Nav.Item>
                  <Nav.Link as={Link} to="/">{t("Home")}</Nav.Link> 
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/about">{t("About")}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/station">{t("Station")}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/observation">{t("Observations")}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/satellites">{t("Satellites")}</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/station" element={<Station />} />
            <Route path="/observation" element={<Observation />} />
            <Route path="/satellites" element={<Satellites />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;

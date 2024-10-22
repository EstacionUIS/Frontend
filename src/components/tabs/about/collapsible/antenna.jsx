import React from 'react';
import { useTranslation } from 'react-i18next';

import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

import antenna from '/images/station/station_2.jpg'; 

function Antenna() {

  const { t } = useTranslation();

  return (

    <Card>
      <Card.Header
        onClick={() => setOpen(!open)}
        aria-controls="observation-details"
        aria-expanded={open}
        style={{ cursor: 'pointer' }}
      >
        {t("About.Antenna.Title")}
      </Card.Header>
      <Collapse in={open}>
        <Row className="mt-3" style={{ alignItems: 'stretch' }}> 
          <Col>
            <p>{t("About.Antenna.Description")}</p>
          </Col>
          <Col>
            <img src={antenna} alt={t("About.Antenna.ImageAlt")} className="img-fluid" />
          </Col>
        </Row>
      </Collapse>
    </Card>
  );
}

export default Antenna;

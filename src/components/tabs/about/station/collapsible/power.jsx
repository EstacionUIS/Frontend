import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

import power from '/images/station/power.png'; 

function Power() {

  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

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
            <p>{t("About.Power.Description")}</p>
          </Col>
          <Col>
            <img src={power} alt={t("About.Power.ImageAlt")} className="img-fluid" />
          </Col>
        </Row>
      </Collapse>
    </Card>
  );
}

export default Power;


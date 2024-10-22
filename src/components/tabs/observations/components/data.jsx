import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

import Waterfall from '../cards/waterfall';
import Demoddata from '../cards/demoddata'; 

function Data({ observation }) {
  if (!observation) {
    return null;
  }

  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <Card key={observation.id} className="mb-3">
      <Card.Header
        onClick={() => setOpen(!open)}
        aria-controls="observation-details"
        aria-expanded={open}
        style={{ cursor: 'pointer' }}
      >
        {t('Observation.DataTittle')}
      </Card.Header>
      <Collapse in={open}>
        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <Col className="mt-3">
            <Row><Waterfall observation={observation} /></Row>
            <Row><Demoddata observation={observation} /></Row>
            </Col>
        </Card.Body>
      </Collapse>
    </Card>
  );
}

export default Data;

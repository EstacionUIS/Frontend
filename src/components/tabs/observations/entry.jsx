import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

import Header from './components/header';

import Image from './cards/image';
import Information from './cards/information';
import Description from './cards/description';
import Waterfall from './cards/waterfall';
import Demoddata from './cards/demoddata'; 

import { getSatelliteByNoradId } from '../../../api/satnogsAPI';

function Entry({ observation }) {
  if (!observation) {
    return null;
  }

  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [satelliteData, setSatelliteData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSatelliteByNoradId(observation.norad_cat_id);
        setSatelliteData(data[0]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Card key={observation.id} className="mb-3">
      <Card.Header
        onClick={() => setOpen(!open)}
        aria-controls="observation-details"
        aria-expanded={open}
        style={{ cursor: 'pointer' }}
      >
        <Header observation={observation} />
      </Card.Header>
      <Collapse in={open}>
        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            { isLoading ?
                <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">{t('Loading')}...</span>
                </Spinner>
                </div> 
                : 
                <div>
                    <Row className="mt-3" style={{ alignItems: 'stretch' }}> 
                        <Col><Information satelliteData={satelliteData} /></Col>
                        <Col><Image satelliteData={satelliteData} /></Col>
                        <Col><Description satelliteData={satelliteData} /></Col>
                    </Row>
                    {observation.waterfall_status === "with-signal" && (
                        <Col className="mt-3">
                        <Row><Waterfall observation={observation} /></Row>
                        <Row><Demoddata observation={observation} /></Row>
                        </Col>
                    )}
                </div>
            }
        </Card.Body>
      </Collapse>
    </Card>
  );
}

export default Entry;

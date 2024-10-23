import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup'; 

import { useTranslation } from 'react-i18next';

import Raspberry from "./Materials/raspberry";
import AntennaAndSDR from "./Materials/AntennaAndSDR";
import PowerSource from "./Materials/powerSource";
import Enclosure from "./Materials/enclosure";

function Materials() {

  const { t } = useTranslation("Home.Station");

  return (
    <div>
      <Accordion.Header>
        <b>{t("Content.Materials.Title")}</b>
      </Accordion.Header>
      <Accordion.Body>
        <div className="justify-content-center">
          <p>{t('Content.Materials.Description')}</p>
          <ListGroup variant="flush"> 
            <ListGroup.Item className="py-3 border-0"> 
              <Raspberry /> 
            </ListGroup.Item>
            <ListGroup.Item className="py-3 border-0"> 
              <AntennaAndSDR /> 
            </ListGroup.Item>
            <ListGroup.Item className="py-3 border-0"> 
              <PowerSource /> 
            </ListGroup.Item>
            <ListGroup.Item className="py-3 border-0"> 
              <Enclosure /> 
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Accordion.Body>
    </div>
  );
}

export default Materials;

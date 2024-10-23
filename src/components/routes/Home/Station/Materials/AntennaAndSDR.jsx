import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BsBoxArrowUpRight } from 'react-icons/bs';

import { useTranslation } from 'react-i18next';

import img from '/images/station/RTL.jpg';

function AntennaAndSDR() {

  const { t } = useTranslation("Home.Station");
  const url = 'https://www.rtl-sdr.com/'

  return (
    <div className="container"> 
      <div className="row justify-content-center">
        <div className="col-md-7">
          <Card>
            <Card.Header>
              {t('Content.Materials.Content.Material2.Title')}
            </Card.Header>
            <Card.Body>
              <p>{t('Content.Materials.Content.Material2.Description')}</p>
              <div className="d-grid gap-2">
                <Button variant="primary" href={url} target="_blank" rel="noopener noreferrer">
                  {t('Content.Materials.Content.Material2.Link')} 
                  <BsBoxArrowUpRight className="ms-2" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-5"> 
          <div>
            <img src={img} className="img-fluid img-thumbnail" style={{ maxWidth: '330px' }}  
              alt={t('Content.Materials.Content.Material2.Title')} 
            />
            <figcaption className="text-center"> 
              {t("Content.Materials.Content.Material2.Caption")} 
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AntennaAndSDR;

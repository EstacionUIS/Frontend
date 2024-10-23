import React from "react";
import Card from 'react-bootstrap/Card';

import { useTranslation } from 'react-i18next';

import img from '/images/station/power.png';

function PowerSource() {

  const { t } = useTranslation("Home.Station");

  return (
    <div className="container"> 
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Card>
            <Card.Header>
              {t('Content.Materials.Content.Material3.Title')}
            </Card.Header>
            <Card.Body>
              <p>{t('Content.Materials.Content.Material3.Description')}</p>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4"> 
          <div>
            <img src={img} className="img-fluid img-thumbnail" style={{ maxWidth: '250px' }}  
              alt={t('Content.Materials.Content.Material3.Title')} 
            />
            <figcaption className="text-center"> 
              {t("Content.Materials.Content.Material3.Caption")} 
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PowerSource;

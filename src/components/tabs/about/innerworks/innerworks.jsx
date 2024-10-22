import React, { useState } from 'react';
import { Card, Collapse } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

function InnerWorks() {

  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <h2 className="mt-4 text-center">{t('About.Intro.Title')}</h2> 
        <p className="text-center">{t('About.Intro.Description')}</p>
      </div>
      <Card>
        <Card.Header onClick={() => setOpen(!open)} style={{ cursor: 'pointer' }}>
          {t('About.StationProject')}
        </Card.Header>
        <Collapse in={open}>
          <Card.Body>
          Hello! I'm the content of the card.
          </Card.Body>
        </Collapse>
      </Card>
    </div>
  );
}

export default InnerWorks;

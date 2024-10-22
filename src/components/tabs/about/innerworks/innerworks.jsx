import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';

// Section
import HoItWorks from './about/innerworks/howitworks';

// Collapsible

function InnerWorks() {

    const { t } = useTranslation();
    const { open, setOpen } = useState(false);

  return (
    <div>
      <div className='container roundedd p-4'>
        <h2 className="mt-4 text-center">{t('About.Intro.Title')}</h2> 
        <p className="text-center">{t('About.Intro.Description')}</p>
      </div>
      <Card>
        <Card.Header
          onClick={() => setOpen(!open)}
          aria-controls="observation-details"
          aria-expanded={open}
          style={{ cursor: 'pointer' }}
        >
          {t('About.StationProject')}
        </Card.Header>
        <Collapse in={open}>
          <Card.Body>
            <div>
              <div><HoItWorks/></div>
            </div>
          </Card.Body>
        </Collapse>
      </Card>
    </div>
  );
}

export default InnerWorks;

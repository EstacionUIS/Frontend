import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';

// Section
import Location from './about/station/location';
import Installation from './about/station/installation';

// Collapsible
//import Software from './about/station/collapsible/software';
import Antenna from './about/station/collapsible/antenna';
/*import Raspberry from './about/station/collapsible/raspberry';*/
import Power from './about/station/collapsible/power';
import Enclosure from './about/station/collapsible/enclosure';

function Station() {

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
              <div><Location/></div>
              <div><Installation/></div>
              <div><Antenna /></div>
              <div><Power /></div>
              <div><Enclosure /></div>
            </div>
          </Card.Body>
        </Collapse>
      </Card>
    </div>
  );
}

export default Station;

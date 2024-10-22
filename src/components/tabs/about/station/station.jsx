import React, { useState } from 'react';
import { Card, Collapse } from 'react-bootstrap';

function StationAbout() {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <Card.Header onClick={() => setOpen(!open)} style={{ cursor: 'pointer' }}>
        Click me to expand/collapse!
      </Card.Header>
      <Collapse in={open}>
        <Card.Body>
          Hello! I'm the content of the card.
        </Card.Body>
      </Collapse>
    </Card>
  );
}

export default StationAbout;

import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'; 
import Accordion from 'react-bootstrap/Accordion';

import { useTranslation } from 'react-i18next';

function Facts() {

    const { t } = useTranslation("Home.Facts");

    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <b>{t("Title")}</b>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <p>{t("Content.F1")}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>{t("Content.F2")}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>{t("Content.F3")}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>{t("Content.F4")}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Facts;

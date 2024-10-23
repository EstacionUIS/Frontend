import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'; 
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';

function Satellite() {

    const { t } = useTranslation("Home.Functionality");

    return (
        <div>
            <Accordion.Header>
                <b>{t("Satellite.Title")}</b>
            </Accordion.Header>
            <Accordion.Body>
                <div>
                    <p>{t("Satellite.Description")}</p>
                    <ListGroup variant="flush">
                        {t("Satellite.Content.Title")}
                        <ListGroup.Item>
                            <p>{t("Satellite.Content.Content.Step1")}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>{t("Satellite.Content.Content.Step2")}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>{t("Satellite.Content.Content.Step3")}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>{t("Satellite.Content.Content.Step4")}</p>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Accordion.Body>
        </div>
    );
}

export default Satellite;

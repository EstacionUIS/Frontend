import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'; 
import { BsBoxArrowUpRight } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';

function SatNOGS() {

    const { t } = useTranslation("Home.Functionality");
    const url = 'https://network.satnogs.org/';

    return (
        <div>
            <Accordion.Header>
                <b>{t("SatNOGS.Title")}</b>
            </Accordion.Header>
            <Accordion.Body>
                <div>
                    <p>{t("SatNOGS.Description")}</p>
                    <ListGroup variant="flush">
                        {t("SatNOGS.Content.Title")}
                        <ListGroup.Item>
                            <p>{t("SatNOGS.Content.Content.Step1")}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>{t("SatNOGS.Content.Content.Step2")}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>{t("SatNOGS.Content.Content.Step3")}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>{t("SatNOGS.Content.Content.Step4")}</p>
                        </ListGroup.Item>
                    </ListGroup>
                    <div>
                        <Button variant="primary" href={url} target="_blank" rel="noopener noreferrer">
                            {t('SatNOGS.Content.Link')} 
                            <BsBoxArrowUpRight className="ms-1" />
                        </Button>
                    </div>
                </div>
            </Accordion.Body>
        </div>
    );
}

export default SatNOGS;

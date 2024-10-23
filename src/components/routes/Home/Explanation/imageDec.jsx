import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';

function ImageDec() {

    const { t } = useTranslation("Home.Functionality");

    return (
        <div>
            <Accordion.Header>
                <b>{t("ImageDec.Title")}</b>
            </Accordion.Header>
            <Accordion.Body>
                <p>{t("ImageDec.Description")}</p>
            </Accordion.Body>
        </div>
    );
}

export default ImageDec;

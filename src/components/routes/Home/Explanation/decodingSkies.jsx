import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';

function DecodingSkies() {

    const { t } = useTranslation("Home.Functionality");

    return (
        <div>
            <Accordion.Header>
                <b>{t("Skies.Title")}</b>
            </Accordion.Header>
            <Accordion.Body>
                <p>{t("Skies.Description")}</p>
            </Accordion.Body>
        </div>
    );
}

export default DecodingSkies;

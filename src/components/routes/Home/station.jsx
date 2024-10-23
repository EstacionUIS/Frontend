import React from "react";
import Accordion from 'react-bootstrap/Accordion';

import { useTranslation } from 'react-i18next';

import Location from "./Station/location";
import Explore from "./Station/explore";
import Materials from "./Station/materials";

function Station() {

    const { t } = useTranslation("Home.Station");

    return (
        <div>
            <div>
                <b>{t("Title")}</b>
                <p>{t("Description")}</p>
            </div>
            <div>
                <b>{t("Goal.Title")}</b>
                <ul>
                    <li>{t("Goal.Content.Goal1")}</li>
                    <li>{t("Goal.Content.Goal2")}</li>
                    <li>{t("Goal.Content.Goal3")}</li>
                </ul>
            </div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Explore/>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Location/>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Materials/>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Station;

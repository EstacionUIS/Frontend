import React from "react";
import Accordion from 'react-bootstrap/Accordion';

import { useTranslation } from 'react-i18next';

import SatNOGS from "./Explanation/satNOGS";
import DecodingSkies from "./Explanation/decodingSkies";
import Satellite from "./Explanation/satellite";
import ImageDec from "./Explanation/imageDec";

function Explanation() {

    const { t } = useTranslation("Home.Functionality");

    return (
        <div>
            <div>
                <b>{t("Title")}</b>
                <p>{t("Description")}</p>
            </div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <SatNOGS/>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <DecodingSkies/>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Satellite/>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <ImageDec/>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Explanation;

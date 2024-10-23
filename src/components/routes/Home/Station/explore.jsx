import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';

import map1 from '/images/station/map1.png';
import map2 from '/images/station/map2.png';

function Explore() {

    const { t } = useTranslation("Home.Station");

    return (
        <div>
            <Accordion.Header>
                <b>{t("Content.Exploring.Title")}</b>
            </Accordion.Header>
            <Accordion.Body>
                <div className="text-center"> 
                    <p>{t("Content.Exploring.Description")}</p>
                    <div className="row justify-content-center"> 
                        <div className="col-md-6">
                            <figure> 
                                <img src={map1} className="img-fluid img-thumbnail" style={{ maxWidth: '500px' }} 
                                    alt={t("Content.Location.Building1Alt")} 
                                />
                                <figcaption className="text-center"> 
                                    {t("Content.Location.Images.Caption1")} 
                                </figcaption>
                            </figure>
                        </div>
                            <div className="col-md-6">
                                <figure>
                                    <img src={map2} className="img-fluid img-thumbnail" style={{ maxWidth: '500px' }} 
                                    alt={t("Content.Location.Building2Alt")}  
                                />
                                <figcaption className="text-center">
                                    {t("Content.Location.Images.Caption2")} 
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </Accordion.Body>
        </div>
    );
}

export default Explore;

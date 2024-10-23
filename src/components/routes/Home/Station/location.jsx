import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';

import building1 from '/images/station/station_1.jpg';
import building2 from '/images/station/station_2.jpg';

function Location() {

    const { t } = useTranslation("Home.Station");

    return (
        <div>
            <Accordion.Header>
                <b>{t("Content.Location.Title")}</b>
            </Accordion.Header>
            <Accordion.Body>
                <div className="text-center"> 
                    <p>{t("Content.Location.Description")}</p>
                    <div className="row justify-content-center"> 
                        <div className="col-md-4">
                            <figure> 
                                <img src={building1} className="img-fluid img-thumbnail" style={{ maxWidth: '285px' }} 
                                    alt={t("Content.Location.Building1Alt")} 
                                />
                                <figcaption className="text-center"> 
                                    {t("Content.Location.Images.Caption1")} 
                                </figcaption>
                            </figure>
                        </div>
                            <div className="col-md-7">
                                <figure>
                                    <img src={building2} className="img-fluid img-thumbnail" style={{ maxWidth: '500px' }} 
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

export default Location;

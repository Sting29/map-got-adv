import React, { useState, useEffect, memo } from 'react';

import { ShapeAdEvent } from "../../propShapes";

import Ad from "./Ad";

import './map-with-ad.css';

const AD_SHOWING_TIME = 5000;

const MapWithAd = ({ adEvent }) => {
    const [ adEvents, setAdEvents ] = useState([]);

    useEffect(() => {
        if(!adEvent) {
            return;
        }
        setAdEvents([ adEvent, ...adEvents ]);
        setTimeout(() => {
            setAdEvents(adEvents => {
                const newAdEvents = [ ...adEvents ];
                newAdEvents.pop();
                return newAdEvents;
            });
        }, AD_SHOWING_TIME);

    }, [ adEvent ]);

    return (
        <div className="map-with-ad-container">
            <div className="map-with-ad">
                {adEvents.map((adE) => <Ad key={adE.timestamp} adEvent={adE}/>)}
            </div>
        </div>
    )
};

MapWithAd.propTypes = {
  adEvent: ShapeAdEvent,
};

export default memo(MapWithAd);
import React, { useState, useEffect } from 'react';

import { ShapeAdEvent } from "../../propShapes";
import LogAdRow from "./LogAdRow";

import './log-ads.css';

const LogAds = ({ adEvent }) => {
    const [ adEvents, setAdEvents ] = useState([]);

    useEffect(() => {
        if (!adEvent) {
            return;
        }
        setAdEvents(adEvents => [ adEvent, ...adEvents ]);
    }, [ adEvent ]);

    return (
        <div className="log-ads-container">
            <div className="header">Ads</div>
            <ul>
                {adEvents.map(adE => <LogAdRow key={adE.timestamp} adEvent={adE} />)}
            </ul>
        </div>
    )
};

LogAds.propTypes = {
    adEvent: ShapeAdEvent,
};

export default LogAds;
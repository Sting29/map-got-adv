import React, { memo } from 'react';

import { ShapeAdEvent } from "../../../propShapes";
import { AD_TYPES } from "../../../constants";
import { IconVideo, IconImage, IconLink } from "../../Icons";

import './log-ad-row.css';

const getHumanTime = timestamp => {
    const date = new Date(timestamp);
    const hours = "0" + date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();

    return  `${hours.substr(-2)}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
};

const LogAdRow = ({ adEvent }) => {
    const time = getHumanTime(adEvent.timestamp);

    return (
        <li className="log-ad-row">
            {time}
            {adEvent.type === AD_TYPES.VIDEO ? <IconVideo /> : <IconImage />}
            {adEvent.creative.name}
            <a href={adEvent.creative.url} target="_blank" rel="noopener noreferrer">
                <IconLink/>
            </a>
        </li>
    )
};

LogAdRow.propTypes = {
    adEvent: ShapeAdEvent,
};

export default memo(LogAdRow);
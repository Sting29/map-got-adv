import React, { memo } from 'react';

import { ShapeAdEvent } from "../../../propShapes";
import { AD_TYPES } from "../../../constants";

import './ad.css';

const SIZE = 100;
const MAX_Y = 1877;

const Ad = ({ adEvent }) => {
    const isVideo = adEvent.type === AD_TYPES.VIDEO;
    const isImage = adEvent.type === AD_TYPES.IMAGE;

    const x = adEvent.coordinates.x;
    const y = adEvent.coordinates.y;

    const style = {
        width: SIZE,
        top: MAX_Y - y - SIZE > 0 ? MAX_Y - y - SIZE : 0,
        left: x - SIZE > 0 ? x - SIZE : 0,
    };

    return (
        <div className="ad-container">
            {isImage && <img src={adEvent.creative.url} alt="" style={style} />}
            {isVideo && <video autoPlay muted src={adEvent.creative.url} style={style} />}
        </div>
    )
};

Ad.propTypes = {
    adEvent: ShapeAdEvent,
};

export default memo(Ad);
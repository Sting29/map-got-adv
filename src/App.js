import React, { useState, useEffect } from 'react';
import { adDispatcher } from 'ubimo-ad-dispatcher';

import MapWithAd from "./components/MapWithAd";
import LogAds from "./components/LogAds";

import './app.css';

const App = () => {
    const [ adEvent, setAdEvent ] = useState(undefined);

    useEffect(() => {
        adDispatcher.registerToAdEvents((adE) => {
            setAdEvent({ ...adE, timestamp: Date.now() })
        });
    }, []);

    return (
        <div className="app">
            <LogAds adEvent={adEvent} />
            <MapWithAd adEvent={adEvent} />
        </div>
    );
};

export default App;

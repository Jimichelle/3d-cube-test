'use client'
import Globe from 'globe.gl';
import React from 'react';
import ReactDOM from 'react-dom';


export default function Page() {
    
    const { useState, useEffect } = React;

    const World = () => {
        const [countries, setCountries] = useState({ features : []});

        useEffect(() => {
            fetch('/custom.geo.json'); 
        }, []);

        return <Globe 
            globeImageUrl="/public/assets/1.jpg"

            hexPolygonsData={countries.features}
            hexPolygonResolution={3}
            hexPolygonMargin={0.3}
            hexPolygonsDots={true}

        />
    };

    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(<World />, document.getElementById('globeViz'));

}
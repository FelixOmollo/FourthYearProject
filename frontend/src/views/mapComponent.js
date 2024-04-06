
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent() {
    const [Outages, setOutages] = useState([]);

    useEffect(() => {
        axios.get('/api/outages/')  // Replace with your actual API endpoint URL
            .then(response => {
                setOutages(response.data);
            })
            .catch(error => {
                console.error('Error fetching map data:', error);
            });
    }, []);

    // Use mapData to render map...

    return (
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
    );
}

export default MapComponent;
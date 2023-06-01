import React, { useEffect, useState } from 'react';

const GoogleMapComponent = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `http://maps.google.com/maps/api/js?key=AIzaSyAs2DHu6AvTQ-no_c4panFGZW0K5W-bdyg&exp&sensor=false&libraries=places`;
    window.document.body.appendChild(googleMapsScript);

    googleMapsScript.addEventListener('load', () => {
      const googleMaps = window.google.maps;
      const mapInstance = new googleMaps.Map(document.getElementById('map'), {
        center: { lat: 33.886917, lng: 9.537499 },
        zoom: 8
      });
      setMap(mapInstance);
    });

    return () => {
      const googleMapsScript = document.querySelector('script[src^="https://maps.googleapis.com"]');
      if (googleMapsScript) {
        window.document.body.removeChild(googleMapsScript);
      }
    }
  }, []);

  return (
    <div id="map" style={{ height: "500px" }}></div>
  );
};

export default GoogleMapComponent;

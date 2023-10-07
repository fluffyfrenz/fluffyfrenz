import React, { useEffect, useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, useLoadScript } from '@react-google-maps/api';
import googleMapsConfig from "@/config/googleMapsConfig";

const apiKey = googleMapsConfig.apiKey || 'YOUR_FALLBACK_API_KEY';

const MapComponent: React.FC = () => {
  const [center, setCenter] = useState({ lat: 41.3851, lng: 2.1734 });
  const [markers, setMarkers] = useState<Array<{ position: google.maps.LatLng, title: string }>>([]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: ['places'],
  });

  const mapStyles = {
    height: "100vh",
    width: "100%"
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setCenter(pos);
        },
        () => {
          console.error("Error getting location");
        }
      );
    } else {
      console.error("Browser doesn't support Geolocation");
    }
  }, []);

  const handleMapLoad = useCallback((map: google.maps.Map) => {
    const service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(
      {
        location: center,
        radius: 5000,
        type: 'pet_store'
      },
      (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
          const newMarkers = results
            .filter(result => result.name && result.geometry?.location)
            .map(result => ({
              position: result.geometry!.location as google.maps.LatLng,
              title: result.name!
            }));
          setMarkers(newMarkers);
        }
      }
    );
  }, [center]);

  return (
    isLoaded ? (
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={center}
        onLoad={handleMapLoad}
      >
        {markers.map((marker, idx) => (
          <Marker
            key={idx}
            position={marker.position}
            title={marker.title}
          />
        ))}
      </GoogleMap>
    ) : <div>Loading...</div>
  );
}

export default MapComponent;

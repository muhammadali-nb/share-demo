import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import {
  DirectionsRenderer,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import cn from "classnames";
import { useMapStore } from "@/store/map-store";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const defaultOptions = {
  panControl: false,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  overviewMapControl: false,
  rotateControl: false,
  fullscreenControl: false,
  clickableIcons: false,
};

const Map: FC<{ className?: string }> = ({ className }) => {
  const loadMap = useMapStore((state) => state.loadMap);
  const directionResult = useMapStore((state) => state.directionResponse);
  const [defaultPosition, setDefaultPosition] = useState({
    lat: 41.311081,
    lng: 69.240562,
  });
  const [mapZoom, setMapZoom] = useState<number>(14);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyABucMFjKd_gt8lHfu6A52vgPkNIa3QZYw",
    libraries: ["places"],
  });

  const mapRef = useRef(undefined);

  const onLoad = useCallback(function callback(map: any) {
    mapRef.current = map;
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        const pos = { lat, lng };
        setDefaultPosition(pos);
        setMapZoom(17);
      }
    );
  }, []);

  const onUnmount = useCallback(function callback() {
    mapRef.current = undefined;
  }, []);

  useEffect(() => {
    loadMap(isLoaded);
  }, [isLoaded, loadMap]);

  const markerClick = () => {
    setMapZoom(18);
  };

  return (
    <div className={cn("w-full h-full", className)}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultPosition}
          zoom={mapZoom}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={defaultOptions}>
          {directionResult && (
            <DirectionsRenderer
              directions={directionResult ? directionResult : undefined}
            />
          )}
          {/*<Marker position={defaultPosition} icon='main-marker.svg' onClick={markerClick}/>*/}
        </GoogleMap>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Map;

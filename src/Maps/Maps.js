import React, { useEffect, useState } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { MapInfoCard } from "./MapsInfoCard.js";

const MapMarker = ({ house }) => {
  const [location, setLocation] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${house.address}&key=${process.env.REACT_APP_GOOGLE_API_2}`
    )
      .then(response => response.json())
      .then(data => {
        setLocation(data.results[0].geometry.location);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Marker
      position={location}
      label={house.id.toString()}
      onClick={() => handleOpen()}
    >
      {isOpen && (
        <InfoWindow
          options={{ maxWidth: 300 }}
          onCloseClick={() => handleClose()}
        >
          <MapInfoCard house={house} />
        </InfoWindow>
      )}
    </Marker>
  );
};

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=" +
      process.env.REACT_APP_GOOGLE_API +
      "&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div style={{ height: `calc(100vh - 80px)`, width: `100%` }} />
    ),
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 14.6349, lng: -90.5069 }}>
      {props.houses.map(house => {
        return <MapMarker house={house} />;
      })}
    </GoogleMap>
  );
});

export default MyMapComponent;

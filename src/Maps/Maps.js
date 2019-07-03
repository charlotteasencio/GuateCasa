import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBP05PesHZ69JFgRNp2y4AjQD-Y6AcSYO0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div style={{ height: `calc(100vh - 80px)`, width: `80%` }} />
    ),
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 14.6349, lng: -90.5069 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 14.6349, lng: -90.5069 }} />
    )}
  </GoogleMap>
));

export default MyMapComponent;

import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './Maps.scss'

const mapStyles = {
  width: '98%',
  height: '90%',
  left: '1%',
  top: '2%',
  background: 'gray'
};

export class Maps extends Component {
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
          lat: 14.628434,
          lng: -90.522713
          }}
        />
    );
  }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(Maps);
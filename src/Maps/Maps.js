import React, { Component } from 'react';
<<<<<<< HEAD
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
=======
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './Maps.scss'
>>>>>>> 35ad47c5af3243ec52be509b8a8078c91a929089

const mapStyles = {
  width: '98%',
  height: '90%',
  left: '1%',
  top: '2%',
  background: 'gray'
};

export class Maps extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    placeName: ""
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      placeName: "Guatemala"
    });

    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
  

  render() {
    return (
<<<<<<< HEAD
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 14.628434,
         lng: -90.522713
        }}
        onClick={this.onMapClicked}
      ><Marker
      title={'The marker`s title will appear as a tooltip.'}
      name={this.state.placeName}
      position={{lat: 14.628434, lng: -90.522713}} 
      onClick={this.onMarkerClick}
      />
      <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.placeName}</h1>
            </div>
      </InfoWindow>
    </Map>
=======
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
          lat: 14.628434,
          lng: -90.522713
          }}
        />
>>>>>>> 35ad47c5af3243ec52be509b8a8078c91a929089
    );
  }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(Maps);
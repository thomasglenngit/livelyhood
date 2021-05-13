import React, { Component } from 'react';
import Neighbor from './Neighbor'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { NeighborList } from './NeighborList'
import CurrentLocation from './LocMap';


const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {},          // Shows the InfoWindow to the selected place upon a marker
    neighborPlace: {}
  };


  onMarkerClick = (props, marker, e) => // clicking on an EXISTING MARKER
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: `${Neighbor.lat}`,
              lng: `${Neighbor.lng}`
              // lat: 45.5051,
              // lng: -122.6750
            }
          }
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'Portland'} //name and message of volunteer
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
    );
  }
}

export default GoogleApiWrapper({
 
  apiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`
})(MapContainer);
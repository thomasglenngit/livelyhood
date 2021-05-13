import React, { Component } from 'react';
import axios from 'axios'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Neighbor from './Neighbor'
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

  geoCodeTranslate() {
    const location = `${Neighbor.address}`
    
    // document.getElementById('location-input').value;

      axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params:{
          address:location,
          key: process.env.REACT_APP_GEOCODE_KEY
        }
      })
      .then(function(response){
        // Log full response
        console.log(response);

        // Formatted Address
        const formattedAddress = response.data.results[0].formatted_address;
        const formattedAddressOutput = `
          <ul class="list-group">
            <li class="list-group-item">${formattedAddress}</li>
          </ul>
        `;

        // Address Components
        const addressComponents = response.data.results[0].address_components;
        const addressComponentsOutput = '<ul class="list-group">';
        for(const i = 0;i < addressComponents.length; i++){
          addressComponentsOutput += `
            <li class="list-group-item"><strong>${addressComponents[i].types[0]}</strong>: ${addressComponents[i].long_name}</li>
          `;
        }
        addressComponentsOutput += '</ul>';

        // Geometry
        const lat = response.data.results[0].geometry.location.lat;
        const lng = response.data.results[0].geometry.location.lng;
        const geometryOutput = `
          <ul class="list-group">
            <li class="list-group-item"><strong>Latitude</strong>: ${lat}</li>
            <li class="list-group-item"><strong>Longitude</strong>: ${lng}</li>
          </ul>
        `;

        // Output to app
        document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
        document.getElementById('address-components').innerHTML = addressComponentsOutput;
        document.getElementById('geometry').innerHTML = geometryOutput;
      })
      .catch(function(error){
        console.log(error);
      });
    this.setState({
      neighborPlace: {}
    })
  }

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
              lat: 45.5051,
              lng: -122.6750
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
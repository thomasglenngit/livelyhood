import React from 'react';
import PropTypes from 'prop-types'
import axios from 'axios'
import { Link } from 'react-scroll'
import Loc from './Loc'
import LocMap from './LocMap'
import { Card } from 'react-bootstrap';
import './Cards/card-style.css';
import './App.css'
// import { CardDeck } from 'react-bootstrap';



const Neighbor = props => {

  const geoCodeTranslate = () => {

    const location = props.address
  console.log(props.address)
    // document.getElementById('location-input').value;
  
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: location,
        key: process.env.REACT_APP_GEOCODE_KEY
      }
    })
      .then(function (response) {
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
        for (const i = 0; i < addressComponents.length; i++) {
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
        return geometryOutput
        // Output to app
        document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
        document.getElementById('address-components').innerHTML = addressComponentsOutput;
        document.getElementById('geometry').innerHTML = geometryOutput;
      })
      .catch(function (error) {
        console.log(error);
      });
    
  
  }

  return (
    <React.Fragment>

      <div className="card text-center shadow">
        <div className="overflow">
          {/* <img src={props.imgsrc} alt='Image 1' className='card-img-top'/> */}
        </div>
        <div className="card-body text-dark" >
          <h4 className="card-title">{props.name}</h4>
          <div className="card-text text-secondary text-left">
            <p><strong>Address:</strong>   {props.address}</p>
            <p><strong>City:</strong>   {props.city}</p>
            <p><strong>Email:</strong>   {props.email}</p>
            <p><strong>Tools:</strong>   {props.tools}</p>
          </div>
        </div>
        <div className="btn btn-outline-success" onClick={() => props.whenNeighborClicked(props.id)}>Edit Details</div>
        <Link to="map-space"><div className="btn btn-outline-info">
          {/* {geoCodeTranslate()} */}
          {Map.panTo(geoCodeTranslate(props.address))}
          Locate</div></Link>
      </div>
    </React.Fragment>
  );
}

Neighbor.propTypes = {
  whenNeighborClicked: PropTypes.func,
  // whenLocationClicked: PropTypes.func,
  thisNeighbor: PropTypes.object,
  name: PropTypes.string,
  address: PropTypes.string,
  tools: PropTypes.string,
  id: PropTypes.string
};

export default Neighbor;
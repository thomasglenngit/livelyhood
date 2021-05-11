import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'
import { Card } from 'react-bootstrap';
import './Cards/card-style.css';
import './App.css'
// import { CardDeck } from 'react-bootstrap';

function Neighbor(props) {
  return (
    <React.Fragment>
      {/* <link rel="stylesheet" type="text/css" media="all" href="css/reset.css" />
        <link rel="stylesheet" type="text/css" media="all" href="css/text.css" />
        <link rel="stylesheet" type="text/css" media="all" href="css/960.css" /> */}
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
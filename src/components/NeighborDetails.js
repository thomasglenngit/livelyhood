import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
// import { useSelector } from 'react-redux';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import './Cards/card-style.css'

function NeighborDetails(props) {
  useFirestoreConnect([
    { collection: 'neighbors' }
  ]);

  const [formSubmitted, setFormSubmission] = useState(false);

  const thisNeighbor = props.firestore.data.neighbors[props.displayStateReducer.selectedNeighbor];


  console.log(props.displayStateReducer.selectedNeighbor);
  if (thisNeighbor && !formSubmitted) {
    return (
      <React.Fragment>
          <div className="card text-center shadow">
            <div className="overflow">

            </div>
            <div className="card-body text-dark">
              <h1 className="card-title">Neighbor Details</h1>
              <hr />
              <div className="card-text text-secondary">
                <h3>Name: {thisNeighbor.name}</h3>
                <h3><strong>Address: </strong> {thisNeighbor.address}</h3>
                <h3><strong>City: </strong> {thisNeighbor.city}</h3>
                <h3><strong>Email: </strong>{thisNeighbor.email}</h3>
                <h3><strong>Tools: </strong> {thisNeighbor.tools}</h3>
              </div>
              <div className="btn btn-outline-success" onClick={() => props.onClickingEdit(props.displayStateReducer.selectedNeighbor)}>Update Neighbor Info</div>
              
              <div className="btn btn-outline-danger" onClick={() => props.onClickingDelete(props.displayStateReducer.selectedNeighbor)}>Delete Neighbor</div>

              <a className="btn btn-outline-primary" href="/">Home</a>
            </div>
          </div>
          <br/>
          {/* <Card border="info" style={{ fontSize: '10px', width: '400px', margin: '20px' }}>
            <Card.Body style={{ fontSize: '15px' }}>
              <h1><strong>Neighbor Details</strong></h1>
              <h3><strong>Name: </strong> {thisNeighbor.name} </h3>
              <hr />
              <h3><strong>Address: </strong> {thisNeighbor.address}</h3>
              <h3><strong>City: </strong> {thisNeighbor.city}</h3>
              <h3><strong>Email: </strong>{thisNeighbor.email}</h3>
              <h3><strong>Tools: </strong> {thisNeighbor.tools}</h3>
              <hr />
              <button className="btn btn-info" style={{ marginRight: '20px' }} onClick={() => props.onClickingEdit(props.displayStateReducer.selectedNeighbor)}>Update Neighbor Info</button>
              <button className="btn btn-danger" onClick={() => props.onClickingDelete(props.displayStateReducer.selectedNeighbor)}>Delete Neighbor</button>
              <hr />
            </Card.Body>
          </Card> */}
      </React.Fragment>
    )
  } else if (thisNeighbor && formSubmitted) {
    return (
      <React.Fragment>
        <h3>Loading Neighbor Details...</h3>
      </React.Fragment>
    )
  }
}

NeighborDetails.propTypes = {
  selectedNeighbor: PropTypes.string,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

const mapStateToProps = state => {
  return {
    displayStateReducer: state.displayStateReducer,
    firestore: state.firestore
  }
}

NeighborDetails = connect(mapStateToProps)(NeighborDetails);

export default NeighborDetails;

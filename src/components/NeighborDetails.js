import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
// import { useSelector } from 'react-redux';
import { useState } from 'react';
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
            <h2 className="card-title">Neighbor Details:</h2>
            <hr />
            <div className="card-text text-secondary text-left">
              <h5>Name: {thisNeighbor.name}</h5>
              <h5><strong>Address: </strong> {thisNeighbor.address}</h5>
              <h5><strong>City: </strong> {thisNeighbor.city}</h5>
              <h5><strong>Email: </strong>{thisNeighbor.email}</h5>
              <h5><strong>Tools: </strong> {thisNeighbor.tools}</h5>
            </div>
            <div className="btn btn-outline-success " onClick={() => props.onClickingEdit(props.displayStateReducer.selectedNeighbor)}>Update Neighbor Info</div>
            <br />
            <div className="btn btn-outline-danger " onClick={() => props.onClickingDelete(props.displayStateReducer.selectedNeighbor)}>Delete Neighbor</div>
            <br />
            <a className="btn btn-outline-primary " href="/">Home</a>
          </div>
        </div>
        <br />
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

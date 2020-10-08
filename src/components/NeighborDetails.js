import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function NeighborDetails(props) {
  useFirestoreConnect([
    { collection: 'neighbors' }
  ]);

  const [formSubmitted, setFormSubmission] = useState(false);
  // const [answeredCorrectly, setAnswerState] = useState(null);

  const thisNeighbor = props.firestore.data.neighbors[props.displayStateReducer.selectedNeighbor];


  // const onAnswerSubmit = (event) => {
  //   event.preventDefault();
  //   const answer = event.target.answerSubmission.value;
  //   setFormSubmission(true);

  //   if (thisNeighbor.answer === answer) {
  //     setAnswerState(true);
  //     // const propertiesToUpdate = {
  //     //   correctAnswerCount: thisNeighbor.correctAnswerCount +1,
  //     // }
  //     // props.firestore.update({collection: 'neighbors', doc: props.selectedNeighbor }, propertiesToUpdate)
  //   } else {
  //     setAnswerState(false);
  //     // const propertiesToUpdate = {
  //     //   correctAnswerCount: thisNeighbor.incorrectAnswerCount +1,
  //     // }
  //     // props.firestore.update({collection: 'neighbors', doc: props.selectedNeighbor }, propertiesToUpdate)
  //   }

  //   // alter 'counter' - which determines whether to display or hide answer form and answer
  //   // determine if a submitted answer is correct or incorrect
  //   // update firestore entry with new guess count(correct/incorrect)
  //   // update if answered correctly flag... 
  // }

  console.log(props.displayStateReducer.selectedNeighbor);
  if (thisNeighbor && !formSubmitted) {
    return (
      <React.Fragment>
        <Row>
        <Card style={{ width: '300px' }}>
          <h1>Neighbor Details</h1>
          <h3>Name: {thisNeighbor.name} </h3>
          <hr />
          <h3>Address: {thisNeighbor.address}</h3>
          <h3>City: {thisNeighbor.city}</h3>
          <h3>Email: {thisNeighbor.email}</h3>
          <h3>Tools: {thisNeighbor.tools}</h3>
          <hr />
          <button className="btn btn-info" onClick={() => props.onClickingEdit(props.displayStateReducer.selectedNeighbor)}>Update Neighbor Info</button>
          <button className="btn btn-alert" onClick={() => props.onClickingDelete(props.displayStateReducer.selectedNeighbor)}>Delete Neighbor</button>
          <hr />
        </Card>
        </Row>
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

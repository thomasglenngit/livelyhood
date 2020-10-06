import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Neighbor from './Neighbor';
// import { useSelector } from 'react-redux';
// import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function NeighborDelete(props) {
  
  /* useFirestoreConnect([
    { collection: 'questions' }
  ]);

  const questions = props.selectedNeighbor;
  console.log(questions.id + " questions.id should be here" + questions); */

  return (
    <React.Fragment>
      <h1>Are you sure you want to delete this neighbor from the list?</h1>
      {/* <p>{questions.question}</p>  */}                                           
      <Button className="btn btn-alert" onClick={()=> props.onDeleteForReals(props.selectedNeighbor)}>Yes</Button>

      <Button className="btn btn-alert" onClick={()=> props.onDeleteNeighbor()}>NO</Button>
    </React.Fragment>
  )
}

NeighborDelete.propTypes = {
  selectedNeighbor: PropTypes.string,
  onDeleteNeighbor: PropTypes.func,
  onDeleteForReals: PropTypes.func
}

export default NeighborDelete;

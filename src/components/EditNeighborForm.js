import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

function EditNeighborForm(props) {
  const firestore = useFirestore();
  useFirestoreConnect([
    {
      collection: 'neighbors',
      doc: props.selectedNeighbor
    }
  ])

  const neighbor = useSelector(state => state.firestore.data.neighbors[props.selectedNeighbor]);
  console.log(neighbor);
  

  function handleEditNeighborFormSubmission(event) {
    event.preventDefault();
    props.onEditNeighbor();
    const propertiesToUpdate = {
      name: event.target.name.value,
      address: event.target.address.value,
      city: event.target.city.value,
      email: event.target.email.value,
      tools: event.target.tools.value
    }
    return firestore.update({collection: 'neighbors', doc: props.selectedNeighbor }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm
        originalNeighbor={neighbor}
        formSubmission={handleEditNeighborFormSubmission} />
    </React.Fragment>
  )
}

EditNeighborForm.propTypes = {
  selectedNeighbor: PropTypes.string,
  onEditNeighbor: PropTypes.func
};

export default EditNeighborForm;
import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';
import Container from 'react-bootstrap/Container';

function NewNeighborForm(props){
  const firestore = useFirestore();

  function addNeighborToFirestore(event) {
    event.preventDefault();
    props.onNewNeighborCreation();
    return firestore.collection('neighbors').add(
      {
        name: event.target.name.value,
        address: event.target.address.value,
        city: event.target.city.value,
        email: event.target.email.value,
        tools: event.target.tools.value
      }
    );
  }

  return (
    <React.Fragment>
      <Container>
      <ReusableForm
        originalNeighbor={null}
        formSubmission={addNeighborToFirestore} />
        </Container>
    </React.Fragment>
  )
}

NewNeighborForm.propTypes = {
  onNewNeighborCreation: PropTypes.func
}

export default NewNeighborForm;
import React from 'react';
import PropTypes from 'prop-types';
// import InputGroup from 'react-bootstrap/InputGroup';
import { Form } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function NeighborForm(props) {
  let name = "";
  let address = "";
  let city = "";
  let email = "";
  let tools = ""
  if (props.originalNeighbor !== null) {
    ({ name, address, city, email, tools } = props);
  }

  const bodyStyle = {
    // backgroundColor: 'black',
    color: 'Black',
    minHeight: '100vh',
    padding: '20px',
  }

  return (
    <React.Fragment>
      <Container fluid style={bodyStyle}>
        <Form onSubmit={props.formSubmission}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder="Enter name" defaultValue={name} />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control type='text' placeholder="Enter address" defaultValue={address} />
              </Form.Group>
              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type='text' placeholder="Enter city" defaultValue={city} />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type='text' placeholder="Enter email" defaultValue={email} />
              </Form.Group>
              <Form.Group controlId="tools">
                <Form.Label>Tools</Form.Label>
                <Form.Control type='text' placeholder="Enter tools" defaultValue={tools} />
              </Form.Group>
            <button className='mb-3' variant='success' type="submit" size='lg' block>Add New Neighbor</button>
            {/* <button className='mb-3' variant='success' type='button' size='lg' block onClick={()=>onLinkClick('index')}>Back</button> */}
        </Form>
        </Container>
    </React.Fragment>
  )
}

NeighborForm.propTypes = {
  originalNeighbor: PropTypes.object,
  // onLinkClick: PropTypes.func
}

export default NeighborForm;
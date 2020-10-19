import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import * as a from '../actions/index';
// import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';



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
    minHeight: '200px',
    padding: '20px',
  }

  const formStyle = {
    border: '20px',
    align: ''
  }

  const groupStyle = {
    width: '300px',

  }

  const controlStyle = {
    textAlign: 'left',
  }

  const dispatch = useDispatch();
  const handleClickingHome = () => {
    const action = a.homeList();
    dispatch(action);
  }

  return (
    <React.Fragment>
      
        <Card border='info' style={{ fontSize: '10px', width: '400px', margin: '20px', textAlign: 'left'}}>
        <Card.Body style={{ padding: '10px', fontSize: '20px'}}>
          <Form style={formStyle} onSubmit={props.formSubmission}>
            <Form.Group controlId="name">
              <Form.Label>Name: </Form.Label>
              <Form.Control type='text' placeholder="Enter name" defaultValue={name} style={controlStyle}/>
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address: </Form.Label>
              <Form.Control type='text' placeholder="Enter address" defaultValue={address} />
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>City: </Form.Label>
              <Form.Control type='text' placeholder="Enter city" defaultValue={city} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email: </Form.Label>
              <Form.Control type='text' placeholder="Enter email" defaultValue={email} />
            </Form.Group>
            <Form.Group controlId="tools">
              <Form.Label>Tools: </Form.Label>
              <Form.Control type='text' placeholder="Enter tools" defaultValue={tools} />
            </Form.Group>
            <Button variant='success' type="submit" style={{ marginLeft: '40px', marginRight: '40px'}} >Add New Neighbor</Button>
            <Button variant='info' style={{ textAlign: 'right'}} onClick={handleClickingHome}>Home List</Button>
          </Form>
          <hr />
          </Card.Body>
        </Card>
      
    </React.Fragment>
  )
}

NeighborForm.propTypes = {
  originalNeighbor: PropTypes.object,
  // onLinkClick: PropTypes.func
}

export default NeighborForm;
import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import * as a from '../actions/index';
import './App'
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
// import './Cards/card-style.css';




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
    align: 'left', 
    padding: '10px'
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

  const handleAddingNewNeighbor = (id) => {
    const { dispatch } = this.props;
    this.props.firestore.add({collection: 'neighbors', doc: id})
    const action = a.homeList();
    dispatch(action);
  }


  return (
    <React.Fragment>

      {/* <div className="card">
        <div className="overflow">
        </div>
        <div className="card-body text-dark">
          <div className="card-title">{props.name}</div>
          <div className="description">

          </div>
        </div>


        <div className="card-body text-dark shadow">
          <form className="ui form">

            <div className="field">
              <label>Name:</label>
              <input type="text" name="name" placeholder="Enter name" defaultValue={name}></input>
            </div>

            <div className="field">
              <label>Address:</label>
              <input type="text" address="address" placeholder="Enter address" defaultValue={address}></input>
            </div>

            <div className="field">
              <label>City:</label>
              <input type="text" city="city" placeholder="Enter city" defaultValue={city}></input>
            </div>

            <div className="field">
              <label>Email:</label>
              <input type="text" email="email" placeholder="Enter email" defaultValue={email}></input>
            </div>

            <div className="field">
              <label>Tools:</label>
              <input type="text" email="email" placeholder="Enter email" defaultValue={tools}></input>
            </div>


            <button className="ui green basic button" type="submit" onClick={handleAddingNewNeighbor}>Add New Neighbor</button>
            <button className="ui button" onClick={handleClickingHome}>Home</button>
          </form>
        </div>
      </div> */}

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
  onLinkClick: PropTypes.func,
  // handleAddingNewNeighbor: PropTypes.func
}

export default NeighborForm;
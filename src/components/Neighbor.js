import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function Neighbor(props) {
  return(
    <React.Fragment>
      <Card style={{ width: '250px', border: '5px'}} onClick = {() => props.whenNeighborClicked(props.id)}>
      <Card.Header as='h5'>{props.name}</Card.Header>
      <Card.Body>
      <p>{props.address}</p>
      <p>{props.city}</p>
      <p>{props.email}</p>
      <p>{props.tools}</p>
      </Card.Body>
      </Card>
    </React.Fragment>
  );
}

Neighbor.propTypes = {
  whenNeighborClicked: PropTypes.func,
  thisNeighbor: PropTypes.object
};

export default Neighbor;
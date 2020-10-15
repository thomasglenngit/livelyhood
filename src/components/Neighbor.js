import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { CardColumns } from 'react-bootstrap';

function Neighbor(props) {
  return (
    <React.Fragment>
      <Row>
        <CardColumns style={{ margin: '20px', border: '20px black', borderColor: 'black', width: '300px',  }}>
          <Card style={{ width: '250px', align: 'center', backgroundColor: 'beige', }} onClick={() => props.whenNeighborClicked(props.id)}>
            <Card.Header as='h2' style={{ backgroundColor: 'lightGray', }}>{props.name}</Card.Header>
            <Card.Body>
              <Card.Text><p><strong>Address:</strong>   {props.address}</p></Card.Text>
              <Card.Text><p><strong>City:</strong>   {props.city}</p></Card.Text>
              <Card.Text><p><strong>Email:</strong>   {props.email}</p></Card.Text>
              <Card.Text><p><strong>Tools:</strong>   {props.tools}</p></Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </Row>
    </React.Fragment>
  );
}

Neighbor.propTypes = {
  whenNeighborClicked: PropTypes.func,
  thisNeighbor: PropTypes.object,
  name: PropTypes.string,
  address: PropTypes.string,
  tools: PropTypes.string,
  id: PropTypes.string
};

export default Neighbor;
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
// import { CardDeck } from 'react-bootstrap';

function Neighbor(props) {
  return (
    <React.Fragment>
      {/* <link rel="stylesheet" type="text/css" media="all" href="css/reset.css" />
        <link rel="stylesheet" type="text/css" media="all" href="css/text.css" />
        <link rel="stylesheet" type="text/css" media="all" href="css/960.css" /> */}
      <Row>
        <div class='col-md-4' style={{ margin: '20px', width: '300px',  }}>
          <Card border="primary" style={{ width: '18rem', align: 'center',  backgroundColor: 'beige'}} onClick={() => props.whenNeighborClicked(props.id)}>
            <Card.Header as='h4' style={{ padding: '5px', backgroundColor: 'lightGray', }}>{props.name}</Card.Header>
            <Card.Body style={{padding: '8px'}}>
              <Card.Text><p><strong>Address:</strong>   {props.address}</p></Card.Text>
              <Card.Text><p><strong>City:</strong>   {props.city}</p></Card.Text>
              <Card.Text><p><strong>Email:</strong>   {props.email}</p></Card.Text>
              <Card.Text><p><strong>Tools:</strong>   {props.tools}</p></Card.Text>
            </Card.Body>
          </Card>
        </div>
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
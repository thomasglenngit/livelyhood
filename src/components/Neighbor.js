import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
// import { CardDeck } from 'react-bootstrap';

function Neighbor(props) {
  return (
    <React.Fragment>
      {/* <link rel="stylesheet" type="text/css" media="all" href="css/reset.css" />
        <link rel="stylesheet" type="text/css" media="all" href="css/text.css" />
        <link rel="stylesheet" type="text/css" media="all" href="css/960.css" /> */}
        <div class='col-md-4' style={{ width: '300px',  }}>
          <Card border="primary" style={{ width: '18rem', height: '15rem', align: 'center',  backgroundColor: 'beige'}} onClick={() => props.whenNeighborClicked(props.id)}>
            <Card.Header as='h5' style={{ padding: '5px', backgroundColor: 'lightGray', }}>{props.name}</Card.Header>
            <Card.Body style={{padding: '3px'}}>
              <Card.Text><p><strong>Address:</strong>   {props.address}</p></Card.Text>
              <Card.Text><p><strong>City:</strong>   {props.city}</p></Card.Text>
              <Card.Text><p><strong>Email:</strong>   {props.email}</p></Card.Text>
              <Card.Text><p><strong>Tools:</strong>   {props.tools}</p></Card.Text>
            </Card.Body>
          </Card>
        </div>

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
import React from "react";
import PropTypes from "prop-types";
import Neighbor from './Neighbor';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import CardColumns from 'react-bootstrap/CardColumns';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


function NeighborList(props) {


  useFirestoreConnect([
    { collection: 'neighbors' }
  ]);

  const neighbors = useSelector(state => state.firestore.ordered.neighbors);//this is a hook!

  if (isLoaded(neighbors)) {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <CardColumns>
              <Card style={{ width: '400px', border: '5px' }}>
                <Card.Body>
              {neighbors.map((neighbor) => {
                return <Neighbor
                  whenNeighborClicked={props.onNeighborSelection}
                  name={neighbor.name}
                  address={neighbor.address}
                  city={neighbor.city}
                  email={neighbor.email}
                  tools={neighbor.tools}
                  id={neighbor.id}
                  key={neighbor.id} />
              })}
              </Card.Body>
              </Card>
              <hr />
            </CardColumns>
          </Col>
        </Row>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

NeighborList.propTypes = {
  onNeighborSelection: PropTypes.func
}

export default NeighborList;
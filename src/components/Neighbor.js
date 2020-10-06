import React from 'react';
import PropTypes from 'prop-types';

function Neighbor(props) {
  return(
    <React.Fragment>
      <div onClick = {() => props.whenNeighborClicked(props.id)}>
      <p>{props.name}</p>
      <p>{props.address}</p>
      <p>{props.city}</p>
      <p>{props.email}</p>
      <p>{props.tools}</p>
      </div>
      <hr />
    </React.Fragment>
  );
}

Neighbor.propTypes = {
  whenNeighborClicked: PropTypes.func,
  thisNeighbor: PropTypes.object
};

export default Neighbor;
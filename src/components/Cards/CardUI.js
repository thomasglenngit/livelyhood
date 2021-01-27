import React from 'react';
import './card-style.css';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        {/* <img src={props.imgsrc} alt='Image 1' className='card-img-top'/> */}
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil quis vel debitis beatae illum error sit id, temporibus sunt maxime!
        </p>
        <a href="#" className="btn btn-outline-success">Go Anywhere</a>
      </div>
    </div>
  );
}

Card.propTypes = {
  whenNeighborClicked: PropTypes.func,
  thisNeighbor: PropTypes.object,
  name: PropTypes.string,
  address: PropTypes.string,
  tools: PropTypes.string,
  id: PropTypes.string
};

export default Card;
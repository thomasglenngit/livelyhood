import React from "react";
import livelihood from '../images/livelihood.png';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import Header from 'react-bootstrap/Header';
import * as a from '../actions/index';
import { useDispatch } from 'react-redux';

function Header(props){
  const headerStyle = {
    fontFamily: 'helvetica',
    fontSize: '50px',
    textAlign: 'center',
    backgroundColor: 'lavender',
    paddingTop: '20px',
    paddingBottom: '20px',
    marginBottom: '10px'
  }

  const img = {
    maxWidth: '947px'
  }

  const h1Header = {
    color: 'black',
    fontWeight: 'bold'
  }
  const dispatch = useDispatch();
  const handleClickingAdd = () => {
    const action = a.newFormDisplay();
    dispatch(action);
  }

  return (
    <React.Fragment>
      <Row>
        <Col>
        {/* <div className="page-header" style={headerStyle}> */}
          <h1 style={h1Header}>LIVELYHOOD</h1>
          <Image src={livelihood} style={img} />
          <Button variant='info' onClick={handleClickingAdd}>ADD NEIGHBOR</Button>
        {/* </div> */}
      </Col>
      </Row>
    </React.Fragment>
  );
}

export default Header;


import React from "react";
import livelihood from '../images/livelihood.png';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as a from '../actions/index';
import { useDispatch } from 'react-redux';

function Header() {


  const headerStyle = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    // backgroundColor: 'lavender',
    // paddingTop: '50px',
    paddingBottom: '50px',
    marginBottom: '20px'
  }
  const h1Header = {
    color: 'black',
    fontWeight: 'bold'
  }
  const img = {
    width: '100%',
    height: 'auto'
    // maxWidth: '947px',
    // maxHeight: '450px', 
    // paddingLeft: '50%'
  }

  const dispatch = useDispatch();
  const handleClickingAdd = () => {
    const action = a.newFormDisplay();
    dispatch(action);
  }


  return (
    <React.Fragment>
    <div className="page-header" style={headerStyle}>
      <Row>
        {/* <Col md={5} > */}
          {/* <h1 style={h1Header}>LIVELIHOOD</h1> */}
        {/* </Col> */}
        <Col md={4}>
          <Image src={livelihood} style={img} />
          <Button variant='info' onClick={handleClickingAdd}>ADD NEIGHBOR</Button>
        </Col>
      </Row>
    </div>
    </React.Fragment>
  );
}

export default Header;




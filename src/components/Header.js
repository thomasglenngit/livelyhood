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
  }

  const buttonStyle = {
    margin: '20px',
    border: '8px',
    borderColor: 'black',
    width: '300px',
    height: '45px',
    fontWeight: 'bold',
    fontSize: 'large'

  }

  const dispatch = useDispatch();
  const handleClickingAdd = () => {
    const action = a.newFormDisplay();
    dispatch(action);
  }


  return (
    <React.Fragment>
    <div className="page-header" style={headerStyle} >
          <Image src={livelihood} style={img} />
          <Button style={buttonStyle} variant='info' onClick={handleClickingAdd}>Volunteer Form</Button>
    </div>
    </React.Fragment>
  );
}

export default Header;




import React from "react";
import livelihood from '../images/livelihood.png';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as a from '../actions/index';
import { useDispatch } from 'react-redux';
import './App.css'

function Header() {


  const headerStyle = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    paddingTop: null,
    paddingBottom: '50px',
    zIndex: 1
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
    fontSize: 'large',
    position: 'relative',


  }

  const dispatch = useDispatch();
  const handleClickingAdd = () => {
    const action = a.newFormDisplay();
    dispatch(action);
  }


  return (
    <React.Fragment>
      <div className="page-header" style={headerStyle} >
        <Image
          src={livelihood}
          style={img}
        >
        </Image>
        <div>
          <Button style={buttonStyle} variant='info' onClick={handleClickingAdd}>Volunteer Form</Button>
        </div>


      </div>

    </React.Fragment>
  );
}

export default Header;




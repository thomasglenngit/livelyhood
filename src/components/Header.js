import React from "react";
import livelihood from '../images/livelihood.png';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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







  return (
    <React.Fragment>
      <div className="page-header" style={headerStyle} >
        <Image
          src={livelihood}
          style={img}
        >
        </Image>



      </div>

    </React.Fragment>
  );
}

export default Header;




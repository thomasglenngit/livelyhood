import { render } from '@testing-library/react';
import React from 'react';

const footerStyle = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  backgroundColor: 'gold',
  paddingTop: '5px',
  paddingBottom: '5px',

}
const h1Footer = {
  fontWeight: 'bold'
}

const Footer = () => {
  render() ;
    return (
      <React.Fragment>
        <div className="page-footer" style={footerStyle}>
          <h3 style={h1Footer}>Copyright: Thomas Glenn 2020</h3>
        </div>
      </React.Fragment>
    )
  
}

  export default Footer;
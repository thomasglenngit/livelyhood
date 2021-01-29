import React from 'react';

export function Footer() {
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

  return (
   
    <div className="page-footer" style={footerStyle}>
      <h3 style={h1Footer}>Copyright: Thomas Glenn 2020</h3>
    </div>

  )
}

export default Footer;
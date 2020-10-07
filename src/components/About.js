import React from 'react';

function About() {
  const aboutStyle = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    paddingTop: '5px',
    paddingBottom: '5px',
    marginBottom: '10px'
  }
  const h1Footer = {
    fontWeight: 'bold'
  }

  return (
    <div className="page-about" style={aboutStyle}>
      <p>Some Stuff</p>
    </div>
  )
}

export default About;
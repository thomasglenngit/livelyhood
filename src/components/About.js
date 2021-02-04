import React from 'react';
import './App.css'

import Button from 'react-bootstrap/Button';
import * as a from '../actions/index';
import { useDispatch } from 'react-redux';


// const buttonStyle = {
//   margin: '20px',
//   border: '8px',
//   borderColor: 'black',
//   width: '300px',
//   height: '45px',
//   fontWeight: 'bold',
//   fontSize: 'large',
//   position: 'relative',
  
// }



function About() {

  const dispatch = useDispatch();
const handleClickingAdd = () => {
  const action = a.newFormDisplay();
  dispatch(action);
}

  return (
    <React.Fragment>
      <div className="page-about">
        <p>Volunteer with Us!</p>
        <p>A typical LIVELYHOOD volunteer is not one type. The LIVELYHOOD volunteer is anyone who is active and involved in the community--or wants to be. LIVELYHOOD teams are best formed in neighborhoods through a partnership with existing community groups such as a Neighborhood Watch program, Rotary Club, business group, faith based group or homeowners association. Together with their neighbors, team members and coworkers, they build a LIVELYHOOD network within their own community, teaming with the San Francisco Fire Department. All residents can benefit from LIVELYHOOD training. (Participations under 18 require the signature of a parent or guardian.)</p>
        <p>LIVELYHOOD connects volunteers with a network of fellow volunteers all working together for a common cause. LIVELYHOOD members are trained citizen first responders who can help save lives.</p>
        <p>The LIVELYHOOD Training Program is a 20 hour comprehensive program consisting of six (6) class sessions.  Delivery of these 6 sessions is offered in a variety of scheduling options. Every potential volunteer must 1) attend and complete all six classes; 2) upon completion of the training, SFFD may provide a certification; 3) individuals who complete the program and obtain certification may be invited to volunteer; and 4) all individuals invited to volunteer continue to do so at the discretion of SFFD.</p>
        <p>
          The training instructors are professional firefighters. There is no cost for our neighborhood training classes. There is a fee for private training.</p>
      </div>

      <div>
        
        <div id="volunteer-button" className="btn btn-outline-success" onClick={handleClickingAdd}>Volunteer Form</div>
      </div>
    </React.Fragment>
  )
}

export default About;
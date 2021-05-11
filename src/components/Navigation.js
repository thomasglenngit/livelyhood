import React from 'react'
import LHBorderless from '../images/LHBorderless.png'
import Hamburger from '../images/Hamburger.png'
import { Link } from 'react-scroll'
import './App.css'

// import { NavLink, Switch, Route } from 'react-router-dom'



export const Navigation = () => (
      <nav>
        <ul>
          
          <img className="lh-logo" alt="livelyhoodIcon" src={LHBorderless}></img>
          <li><Link exact classname="current" spy={true} smooth={true} to='/'>Home</Link></li>
          <li><Link exact className="current" spy={true} smooth={true} to='about'>About</Link></li>
          <li><Link exact className="current" spy={true} smooth={true} to='contact'>Contact</Link></li>
          <li><Link exact className="current" spy={true} smooth={true} to='cards-title'>Cards</Link></li>
          <li><Link exact className="current" spy={true} smooth={true} to='map-space'>Map</Link></li>
          <img className="hamburger-logo" alt="hamburger" icon src={Hamburger}></img>
        </ul>
      </nav>
);

// This is code for Routing content in the 'main' section with a click function from the Navbar. 

// const Home = () => (
  //   <div className='home'>
  //     <h1>Welcome to my portfolio website</h1>
  //     <p> Feel free to browse around and learn more about me.</p>
  //   </div>
  // );

  // const About = () => (
  //   <div className='about'>
  //     <h1>About Me</h1>
  //     <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
  //     <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
  //   </div>
  // );

  // const Contact = () => (
  //   <div className='contact'>
  //     <h1>Contact Me</h1>
  //     <p>You can reach me via email: <strong>hello@example.com</strong></p>
  //   </div>
  // );

  // export const Main = () => (
  //   <Switch>
  //     <Route exact path='/' component={Home}></Route>
  //     <Route exact path='/about' component={About}></Route>
  //     <Route exact path='/contact' component={Contact} ></Route>
  //   </Switch>
  // );
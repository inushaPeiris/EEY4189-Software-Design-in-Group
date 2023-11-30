import React, { Component } from 'react';
import Logo from '../assets/travelit_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';

export default class Cover extends Component {
  render() {
    const coverStyle = {
      backgroundColor: 'rgb(0, 0, 72)', 
      color: 'white',
      textAlign: 'center',
      padding: '70px', 
      borderRadius: '10px', 
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };

    const logoStyle = {
      width: '400px',
      margin: 'auto',
      display: 'block',
    };

    const headingStyle = {
      padding:'10px',
      fontSize: '24px',
      marginTop: '20px',
    };

    const buttonStyle = {
      marginTop: '20px',
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: 'white',
      color: 'rgb(0, 0, 72)',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '10px',
    };

    const bodyStyle = {
      margin: '0', 
      height: '100vh',
    };

    return (
      <div style={bodyStyle}>
        <div style={coverStyle}>
          <img src={Logo} alt="Travelit Logo" style={logoStyle} />
          <div style={headingStyle}>Travel Management System</div>
          <Spinner animation="grow" variant="light" style={{paddingTop:'10px'}} /><br></br>
          <Link to="/login">
          <button style={buttonStyle}>
            Get Started &nbsp;&nbsp;
            <FontAwesomeIcon icon={faAngleRight} style={{ color: "rgb(0, 0, 72)" }} />
          </button>
          </Link>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../css/header.css';


export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo-container">
          <span className="company-name">Travelit</span>
        </div>
        <div className="logout-button">
          <button className='btn'>
            <FontAwesomeIcon icon={faSignOutAlt} style={{ color: "#ffffff" }} />&nbsp;
            Log Out
          </button>
        </div>
      </div>
    );
  }
}

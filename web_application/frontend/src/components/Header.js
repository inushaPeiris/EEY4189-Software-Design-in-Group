import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../css/header.css';

export default class Header extends Component {
  handleLogout = () => {
    // Display a alert message
    alert("Do yo want to Log out?")

  };

  render() {
    return (
      <div className="header">
        <div className="logo-container">
          <span className="company-name">Travelit</span>
        </div>
        <div className="logout-button">
          {/* Use the Link component to navigate to the home component */}
          <Link to="/">
            <button className='btn' onClick={this.handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} style={{ color: "#ffffff" }} />&nbsp;
              Log Out
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

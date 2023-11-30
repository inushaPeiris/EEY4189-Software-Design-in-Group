import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../css/header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDateTime: new Date().toLocaleString(),
    };
  }

  handleLogout = () => {
    // Display an alert message
    alert("Do you want to log out?");
  };

  componentDidMount() {
    // Update the current date and time every second
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // Clear the interval to avoid memory leaks
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      currentDateTime: new Date().toLocaleString(),
    });
  }

  render() {
    return (
      <div className="header">
        <div className="logo-container">
          <span className="company-name">Travelit</span>
        </div>
        <div className="current-date-time" style={{ color: '#ffffff', textAlign: 'center' }}>
          {this.state.currentDateTime}
        </div>
        <div className="logout-button">
          {/* Use the Link component to navigate to the home component */}
          <Link to="/">
            <button className="btn" onClick={this.handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} style={{ color: '#ffffff' }} />&nbsp;
              Log Out
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

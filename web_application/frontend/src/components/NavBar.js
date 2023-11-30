import React, { Component } from 'react';
import '../css/navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGauge,
  faBox,
  faUserGroup,
  faCubes,
  faComments,
  faCircleInfo,
  faGear,
  faCaretRight,
  faMap,
} from '@fortawesome/free-solid-svg-icons';
import Image from '../assets/travelit_logo.png';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPackagesDropdown: false,
      showClientsDropdown: false,
      showBookingsDropdown: false,
      showFeedbacksDropdown: false,
      showAboutDropdown: false,
      showSettingsDropdown: false,
    };
  }

  // Function to toggle dropdown visibility
  toggleDropdown = (dropdownName) => {
    this.setState((prevState) => ({
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  render() {
    return (
      <div className="sidebar">
        {/* Logo */}
        <img src={Image} alt="Logo" className="mainImage" />

        {/* Dashboard */}
        <div className="menu-item">
          <FontAwesomeIcon icon={faGauge} style={{ color: "#ffffff" }} />&nbsp; &nbsp;
          <a href='/dashboard' style={{textDecoration:'none',color:'white'}}>
                Dashboard
          </a>
        </div>

        {/* Packages */}
        <div className="menu-item" onClick={() => this.toggleDropdown('showPackagesDropdown')}>
          <FontAwesomeIcon icon={faBox} style={{ color: "#ffffff" }} />&nbsp; &nbsp;
          Packages
          {this.state.showPackagesDropdown && (
            <div className="dropdown">
              <div>
                <FontAwesomeIcon icon={faCaretRight} style={{ color: "#ffffff" }} />&nbsp;
                <a href='/packageDetails' style={{textDecoration:'none',color:'white'}}>
                View Package
                </a>
              </div>
              <div>
                <FontAwesomeIcon icon={faCaretRight} style={{ color: "#ffffff" }} />&nbsp;
                <a href='/addPackage' style={{textDecoration:'none',color:'white'}}>
                Add Package
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Clients */}
        <div className="menu-item" onClick={() => this.toggleDropdown('showClientsDropdown')}>
          <FontAwesomeIcon icon={faUserGroup} style={{ color: "#ffffff" }} />&nbsp; &nbsp;
          Clients
          {this.state.showClientsDropdown && (
            <div className="dropdown">
              <div>
                <FontAwesomeIcon icon={faCaretRight} style={{ color: "#ffffff" }} />&nbsp;
                <a href='/clients' style={{textDecoration:'none',color:'white'}}>
                View Clients
                </a>
              </div>
              
              <div>
                <FontAwesomeIcon icon={faCaretRight} style={{ color: "#ffffff" }} />&nbsp;
                <a href='/addClient' style={{textDecoration:'none',color:'white'}}>
                Add Clients
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Bookings */}
        <div className="menu-item" onClick={() => this.toggleDropdown('showBookingsDropdown')}>
          <FontAwesomeIcon icon={faCubes} style={{ color: "#ffffff" }} />&nbsp; &nbsp;
          Bookings
          {this.state.showBookingsDropdown && (
            <div className="dropdown">
              <div>
                <FontAwesomeIcon icon={faCaretRight} style={{ color: "#ffffff" }} />&nbsp;
                <a href='/bookings' style={{textDecoration:'none',color:'white'}}>
                View Bookings
                </a>
              </div>
              <div>
                <FontAwesomeIcon icon={faCaretRight} style={{ color: "#ffffff" }} />&nbsp;
                <a href='/addbooking' style={{textDecoration:'none',color:'white'}}>
                Add Booking
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Feedbacks */}
        <div className="menu-item" onClick={() => this.toggleDropdown('showFeedbacksDropdown')}>
          <FontAwesomeIcon icon={faComments} style={{ color: "#ffffff" }} />&nbsp; &nbsp;
          Feedbacks
          {this.state.showFeedbacksDropdown && (
            <div className="dropdown">
              <div>
                <FontAwesomeIcon icon={faCaretRight} style={{ color: "#ffffff" }} />&nbsp;
                <a href='/viewfeed' style={{textDecoration:'none',color:'white'}}>
                View Feedbacks
                </a>
              </div>
            </div>
          )}
        </div>

        {/* About */}
        <div className="menu-item" onClick={() => this.toggleDropdown('showAboutDropdown')}>
          <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#ffffff" }} />&nbsp; &nbsp;
          About
          {this.state.showAboutDropdown && (
            <div className="dropdown">
              <div>
                <FontAwesomeIcon icon={faCaretRight} style={{ color: "#ffffff" }} />&nbsp;
                <a href='/aboutTravelit' style={{textDecoration:'none',color:'white'}}>
                About Travelit
                </a>
              </div>
              <div>
                <FontAwesomeIcon icon={faCaretRight} style={{ color: "#ffffff" }} />&nbsp;
                <a href='/aboutTeam' style={{textDecoration:'none',color:'white'}}>
                About Team
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Settings */}
        <div className="menu-item" onClick={() => this.toggleDropdown('showSettingsDropdown')}>
          <FontAwesomeIcon icon={faGear} style={{ color: "#ffffff" }} />&nbsp; &nbsp;
          Settings
          {this.state.showSettingsDropdown && (
            <div className="dropdown">
              <div>
              <a href='/settings' style={{textDecoration:'none',color:'white'}}>
                <FontAwesomeIcon icon={faCaretRight} style={{ color: "#ffffff" }} />&nbsp;
                Account Settings
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Sitemap */}
        <div className="menu-item">
          <FontAwesomeIcon icon={faMap} style={{ color: "#ffffff" }} />&nbsp; &nbsp;
          <a href='/sitemap' style={{textDecoration:'none',color:'white'}}>
                Site Map
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;

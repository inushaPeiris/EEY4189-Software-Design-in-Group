import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import '../css/dashboard.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBox,
  faUserGroup,
  faCubes,
  faComments,
  faCircleInfo,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import NavBar from './NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Dashboard extends Component {
  componentDidMount() {
    // Display a welcome toast when the component mounts
    toast.success('Welcome to Travelit');
  }
  render() {
    return (
      <>
      <ToastContainer autoClose={3000} />
      <Header/>
      <NavBar/>
      <div>
        <div className='dashboard'>
          <Container>
            <Row className="align-items-center justify-content-between">
              <Col xs={4} md={2}>
                {/* Content for the first column */}
              </Col>
              <Col xs={18} md={10}>
                <div className="card-container">

                    <Card style={{ width: '18rem', marginRight: '15px' }}>
                    <FontAwesomeIcon icon={faBox} size="2xl" style={{color: "#000049",marginTop: '10px'}} />
                        <Card.Body className="text-center">
                            <Card.Title>Packages</Card.Title>
                            <Card.Text>
                            Streamline travel package management
                            </Card.Text>
                            <Link to="/packageDetails">
                            <Button variant="primary" className='btn btn-success' style={{ backgroundColor: '#157347', color: 'white' }}>
                              Go to Packages
                            </Button>
                            </Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', marginRight: '15px' }}>
                    <FontAwesomeIcon icon={faUserGroup} size="2xl" style={{color: "#000049",marginTop: '10px'}} />
                        <Card.Body className="text-center">
                            <Card.Title>Clients</Card.Title>
                            <Card.Text>
                            Streamline existing customer management
                            </Card.Text>
                            <Link to="/clients">
                            <Button variant="primary" className='btn btn-success' style={{ backgroundColor: '#157347', color: 'white' }}>
                              Go to Customers
                            </Button>
                            </Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', marginRight: '15px' }}>
                    <FontAwesomeIcon icon={faCubes} size="2xl" style={{color: "#000049",marginTop: '10px'}} />
                        <Card.Body className="text-center">
                            <Card.Title>Bookings</Card.Title>
                            <Card.Text>
                            Streamline package bookings management
                            </Card.Text>
                            <Link to="/bookings">
                            <Button variant="primary" className='btn btn-success' style={{ backgroundColor: '#157347', color: 'white' }}>
                              Go to Bookings
                            </Button>
                            </Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', marginRight: '15px' }}>
                    <FontAwesomeIcon icon={faComments} size="2xl" style={{color: "#000049",marginTop: '10px'}} />
                        <Card.Body className="text-center">
                            <Card.Title>Feedback & Inquiries</Card.Title>
                            <Card.Text>
                            Streamline user feecback management
                            </Card.Text>
                            <Link to="/viewfeed">
                            <Button variant="primary" className='btn btn-success' style={{ backgroundColor: '#157347', color: 'white' }}>
                              Go to Feedback
                            </Button>
                            </Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', marginRight: '15px' }}>
                    <FontAwesomeIcon icon={faCircleInfo} size="2xl" style={{color: "#000049",marginTop: '10px'}} />
                        <Card.Body className="text-center">
                            <Card.Title>About</Card.Title>
                            <Card.Text>
                            Get idea about the system and team.
                            </Card.Text>
                            <Link to="/aboutMain">
                              <Button variant="primary" className='btn btn-success' style={{ backgroundColor: '#157347', color: 'white' }}>
                                Go to About
                              </Button>
                            </Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', marginRight: '15px' }}>
                    <FontAwesomeIcon icon={faGear} size="2xl" style={{color: "#000049",marginTop: '10px'}} />
                        <Card.Body className="text-center">
                            <Card.Title>Settings</Card.Title>
                            <Card.Text>
                            Streamline profile details management
                            </Card.Text>
                            <Button variant="primary" className='btn btn-success' style={{ backgroundColor: '#157347', color: 'white' }}>
                              Go to Settings
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    </div>
    </>
    );
  }
}


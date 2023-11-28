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

export default class Dashboard extends Component {
  render() {
    return (
      <>
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
                            <Button variant="primary" className="button" style={{backgroundColor: 'rgb(0, 0, 72)'}}>
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
                            <Button variant="primary" className="button" style={{backgroundColor: 'rgb(0, 0, 72)'}}>
                              Go to Customers
                            </Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', marginRight: '15px' }}>
                    <FontAwesomeIcon icon={faCubes} size="2xl" style={{color: "#000049",marginTop: '10px'}} />
                        <Card.Body className="text-center">
                            <Card.Title>Bookings</Card.Title>
                            <Card.Text>
                            Streamline package bookings management
                            </Card.Text>
                            <Button variant="primary" className="button" style={{backgroundColor: 'rgb(0, 0, 72)'}}>
                              Go to Bookings
                            </Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', marginRight: '15px' }}>
                    <FontAwesomeIcon icon={faComments} size="2xl" style={{color: "#000049",marginTop: '10px'}} />
                        <Card.Body className="text-center">
                            <Card.Title>Feedbacks & Inquiries</Card.Title>
                            <Card.Text>
                            Streamline user feecback management
                            </Card.Text>
                            <Button variant="primary" className="button" style={{backgroundColor: 'rgb(0, 0, 72)'}}>
                              Go to Feedbacks
                            </Button>
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
                              <Button variant="primary" className="button" style={{backgroundColor: 'rgb(0, 0, 72)'}}>
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
                            <Button variant="primary" className="button" style={{backgroundColor: 'rgb(0, 0, 72)'}}>
                              Go to Packages
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


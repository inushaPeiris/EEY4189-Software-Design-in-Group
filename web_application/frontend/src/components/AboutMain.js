import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; 
import '../css/dashboard.css'; 
import '../css/addPackage.css';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/bannerImg.png';
import bannerTeam from '../assets/bannerTeam.png';
import Header from './Header';
import NavBar from './NavBar';

export default class AboutMain extends Component {
  render() {
    return (
      <>
      <Header/>
      <NavBar/>
      <div className='dashboard'>
        <Container style={{ paddingTop: 0 }}>
          <Row className="align-items-center justify-content-between">
            <Col xs={4} md={2}>
              {/* Content for the first column */}
            </Col>
            <Col xs={18} md={10}>
              <div className="card-container">
                <div></div>

                <Card style={{ width: '30rem', marginRight: '5px' }}>
                  <Card.Img variant="top" src={bannerImage} />
                  <Card.Body className="text-center">
                    <Card.Title>About Travelit</Card.Title>
                    <Card.Text>
                        Get idea about the Travelit and why it special.
                    </Card.Text>
                    <Link to="/aboutTravelit">
                    <Button variant="primary" className='btn btn-success' style={{ backgroundColor: '#157347', color: 'white' }}>
                      View Travelit Details
                    </Button>
                    </Link>
                  </Card.Body>
                </Card>

                <Card style={{ width: '30rem', marginRight: '15px' }}>
                  <Card.Img variant="top" src={bannerTeam} />
                  <Card.Body className="text-center">
                    <Card.Title>About Team</Card.Title>
                    <Card.Text>
                        Get idea about the team Just Nerds
                    </Card.Text>
                    <Link to="/aboutTeam">
                    <Button variant="primary" className='btn btn-success' style={{ backgroundColor: '#157347', color: 'white' }}>
                      View Team Details
                    </Button>
                    </Link>
                  </Card.Body>
                </Card>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
      </>
    );
  }
}

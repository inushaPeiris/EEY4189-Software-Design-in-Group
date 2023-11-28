import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import bannerTeam from '../assets/bannerTeam.png';
import { Link } from 'react-scroll';
import '../css/aboutTravelit.css'
import Header from './Header';
import NavBar from './NavBar';

export default class AboutTeam extends Component {
  render() {
    const accordionHeaderStyle = {
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <>
      <Header/>
      <NavBar/>
    <div className='aboutTravelit'>
      <Container >
        <Row className="align-items-center justify-content-between">
          <Col xs={4} md={2}>
            {/* Content for the first column */}
          </Col>
          <Col xs={18} md={10}>
            <img src={bannerTeam} alt="Banner" style={{ width: '100%', height: '30%', paddingBottom: '20px' }} />
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Link to="section1" smooth={true} duration={500} offset={-50}>
                  <Accordion.Header style={accordionHeaderStyle}>Team Just Nerds</Accordion.Header>
                </Link>
                <Accordion.Body>
                  <div id="section1">
                    We are 2nd year Bachelor of Software Engineering undergraduates at The Open
                    University of Sri Lanka and We have grouped up as Team Just Nerds to design a
                    software solution for a real-world problem. Course Module EEY4189 - Software
                    Design in Group
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Link to="section2" smooth={true} duration={500} offset={-50}>
                  <Accordion.Header style={accordionHeaderStyle}>Team Details</Accordion.Header>
                </Link>
                <Accordion.Body>
                  <div id="section2">
                    Supervisor - Mr. Achira Liyanage<br></br>
                    Member - P.I.U.Peiris<br></br>
                    Member - G.G. Maleesha <br></br>
                    Member - N.H.D.Dahanayake <br></br>
                    Member - M.N.D. Rajapaksha
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div></>
  );
}
}

import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import bannerImage from '../assets/bannerImg.png';
import { Link } from 'react-scroll';
import '../css/aboutTravelit.css'
import Header from './Header';
import NavBar from './NavBar';

export default class AboutTravelit extends Component {
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
            <img src={bannerImage} alt="Banner" style={{ width: '100%', height: '30%', paddingBottom: '20px' }} />
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Link to="section1" smooth={true} duration={500} offset={-50}>
                  <Accordion.Header style={accordionHeaderStyle}>What is Travelit?</Accordion.Header>
                </Link>
                <Accordion.Body>
                  <div id="section1">
                    The Travelit application is designed to streamline all travel-related operations, providing a 
                    comprehensive solution for booking, updating, and deleting tour packages. Our platform simplifies 
                    the travel booking process by offering curated tour packages that include destinations, accommodations, 
                    and activities. Users can easily choose from a variety of packages at affordable prices, reducing the 
                    time and effort required to plan a trip individually.
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Link to="section2" smooth={true} duration={500} offset={-50}>
                  <Accordion.Header style={accordionHeaderStyle}>Why is Travelit Special?</Accordion.Header>
                </Link>
                <Accordion.Body>
                  <div id="section2">
                    Travelit stands out with its focus on enhancing both customer and travel agency experiences. For customers, 
                    the application offers enticing trip packages, including accommodations and transportation services. Additionally, 
                    visitors can explore Sri Lanka's top destinations with the help of tour guides provided by Travelit. On the agency 
                    side, Travelit improves efficiency by providing a user-friendly platform for creating and managing travel packages. 
                    This results in up-to-date information, improved customer service, and prompt response to inquiries, making Travelit 
                    a competitive and effective travel management system.
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}
}

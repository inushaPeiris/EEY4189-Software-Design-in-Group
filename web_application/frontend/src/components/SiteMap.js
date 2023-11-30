import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import siteMap from '../assets/siteMap.png';
import Header from './Header';
import NavBar from './NavBar';

export default class SiteMap extends Component {
  render() {
    
  return (
    <>
      <Header/>
      <NavBar/>
    <div >
      <Container >
        <Row className="align-items-center justify-content-between">
          <Col xs={4} md={2}>
            {/* Content for the first column */}
          </Col>
          <Col xs={18} md={10}>
            <img src={siteMap} alt="Banner" style={{ width: '100%', height: 'auto'}} />
            
          </Col>
        </Row>
      </Container>
    </div></>
  );
}
}

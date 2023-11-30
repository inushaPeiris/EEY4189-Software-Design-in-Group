import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import '../css/dashboard.css'; 
import Header from './Header';
import NavBar from './NavBar';
import 'react-toastify/dist/ReactToastify.css';
import bannerImage from '../assets/bannerImg.png';

export default class Setting extends Component {
  
  render() {
    return (
      <>
      <Header/>
      <NavBar/>
      <div>
        <div className='dashboard'>
          <Container style={{ paddingTop: 0 }}>
            <Row className="align-items-center justify-content-between">
              <Col xs={4} md={2}>
                {/* Content for the first column */}
              </Col>
              <Col xs={18} md={10} >
                <div style={{ fontSize:'30px',textAlign:'center',fontWeight:'500' }}>Settings</div>
                <img src={bannerImage} alt="Banner" style={{ width: '100%', height: '30%', paddingBottom: '20px' }} />
              </Col>
            </Row>
          </Container>
        </div>
    </div>
    </>
    );
  }
}


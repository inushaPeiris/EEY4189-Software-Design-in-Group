import React, { Component } from 'react';
import Logo from '../assets/travelit_logo.png';
import {Row, Col, Form, Button } from 'react-bootstrap';
import '../css/adminReg.css'; 

export default class AdminReg extends Component {
  render() {
    return (
      <div className='container'>
        <div className='registration-container'>
          {/* Left Side */}
          <div className='left-side'>
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Username
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="text" placeholder="username" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Email
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Password
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Confirm Password
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="password" placeholder="Re-enter Password" />
                </Col>
              </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 8, offset: 4 }}>
                        <Button variant="primary" className="button" style={{ backgroundColor: 'rgb(0, 0, 72)' }}>
                            Register
                        </Button>
                    </Col>
                </Form.Group>

            </Form>

          </div>

          {/* Right Side */}
          <div className='right-side'>
            <img src={Logo} alt="Travelit Logo" />
            <p className='headText'>Register Here</p>
            <a href='/dashboard' style={{textDecoration:'none',color:'white'}}>
                Already have an account?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

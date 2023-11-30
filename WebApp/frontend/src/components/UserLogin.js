import React, { Component } from 'react';
import Logo from '../assets/travelit_logo.png';
import {Row, Col, Form, Button } from 'react-bootstrap';
import '../css/adminReg.css'; 
import { Link } from 'react-router-dom';

export default class UserLogin extends Component {
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
                  Password
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 8, offset: 4 }}>
                        <Link to="/dashboard">
                            <Button variant="primary" className="button" style={{ backgroundColor: 'rgb(0, 0, 72)' }}>
                                Login
                            </Button>
                        </Link>
                    </Col>
                </Form.Group>

            </Form>

          </div>

          {/* Right Side */}
          <div className='right-side'>
            <img src={Logo} alt="Travelit Logo" />
            <p className='headText'>Admin Login</p>
            <a href='/registration' style={{textDecoration:'none',color:'white'}}>
                Don't have an account?
            </a>
          </div>
        </div>
      </div>
    );
  }
}
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../assets/travelit_logo.png';
import { Row, Col, Form, Button } from 'react-bootstrap';
import '../css/adminReg.css';
import axios from 'axios';

export default class AdminReg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      rePassword: '',
    };
  }

  handleChange = (event) => {
    console.log('handleChange called');
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        console.log('Updated state:', this.state);
      }
    );
  };
    
  handleAddAdmin = async (e) => {
    e.preventDefault();

    const { email, username, password, rePassword } = this.state;

    // Password validation
    if (password !== rePassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post(
        'http://localhost:8000/admin/save',
        { email, username, password, rePassword },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (res.data.success) {
        this.setState({
          email: '',
          username: '',
          password: '',
          rePassword: '',
        });

        // Show notification
        toast.success('Your account is created successfully. Now you can login to the system');

      } else {
        alert('Failed to register admin');
      }
    } catch (error) {
      console.error('Error saving admin:', error);
      alert('Failed to register');
    }
  };
  

  render() {
    const {
      email,
      username,
      password,
      rePassword,
    } = this.state;

    return (
      <div className='container'>
        <ToastContainer />
        <div className='registration-container'>
          {/* Left Side */}
          <div className='left-side'>
            <Form>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Email
                </Form.Label>
                <Col sm={8}>
                <Form.Control 
                  type="email" 
                  placeholder="Email"
                  name="email" // Make sure to set the name attribute
                  value={email}
                  onChange={this.handleChange} 
                />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Username
                </Form.Label>
                <Col sm={8}>
                <Form.Control 
                  type="text"
                  name="username" 
                  placeholder="username"
                  value={username}
                  onChange={this.handleChange}
                />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Password
                </Form.Label>
                <Col sm={8}>
                  <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  name="password" 
                  value={password}
                  onChange={this.handleChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Confirm Password
                </Form.Label>
                <Col sm={8}>
                  <Form.Control 
                  type="password" 
                  name="rePassword" 
                  placeholder="Re-enter Password" 
                  value={rePassword}
                  onChange={this.handleChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 8, offset: 4 }}>
                      <Button 
                      variant="primary" 
                      className="button" 
                      style={{ backgroundColor: 'rgb(0, 0, 72)' }}
                      onClick={this.handleAddAdmin}>
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
            <a href='/login' style={{textDecoration:'none',color:'white'}}>
                Back to Login
            </a>
          </div>

        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../css/addPackage.css';
import Header from './Header';
import NavBar from './NavBar';

export default class AddClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        address: '',
        email: '',
        username: '',
        newPassword: '',
        rePassword: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };


  handleAddClient = async (e) => {
    e.preventDefault();
  
    const {
      name,
      address,
      email,
      username,
      newPassword,
      rePassword,
    } = this.state;
  
    try {
      const res = await axios.post(
        'http://localhost:8000/client/save',
        {
          name,
          address,
          email,
          username,
          newPassword,
          rePassword,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (res.data.success) {
        this.setState({
          name: '',
          address: '',
          email: '',
          username: '',
          newPassword: '',
          rePassword: '',
        });
        alert('Client added successfully');
      } else {
        alert('Error adding client');
      }
    } catch (error) {
      console.error('Error saving Client:', error);
      alert(`Error saving Client: ${error.response.data.error || 'Unknown error'}`);
    }
  };
  

  render() {
    const {
        name,
        address,
        email,
        username,
        newPassword,
        rePassword,
      } = this.state;

    return (
      <>
      <Header/>
      <NavBar/>
      <div className="dashboard">
        <Container style={{ paddingTop: 0 }}>
          <Row className="align-items-center justify-content-between">
            <Col xs={4} md={2}>
              {/* Content for the first column */}
            </Col>
            <Col xs={8} md={10}>
              <div className="headTopic">Add New Client Through System</div>
              <Form>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label className="form-label">Cleint Name</Form.Label>
                  <Form.Control
                    placeholder="Enter client name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label className="form-label">Client Address</Form.Label>
                  <Form.Control
                    placeholder="Enter client address"
                    name="address"
                    value={address}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress3">
                  <Form.Label className="form-label">Client Email</Form.Label>
                  <Form.Control
                    placeholder="Enter places to visit"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress3">
                  <Form.Label className="form-label">Username</Form.Label>
                  <Form.Control
                    placeholder="Enter username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress3">
                  <Form.Label className="form-label">Password</Form.Label>
                  <Form.Control
                    placeholder="Enter password"
                    name="newPassword"
                    value={newPassword}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress3">
                  <Form.Label className="form-label">Confirm Password</Form.Label>
                  <Form.Control
                    placeholder="Re-Enter password"
                    name="rePassword"
                    value={rePassword}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Button variant="primary" className='btn btn-success' style={{ backgroundColor: '#157347', color: 'white' }} onClick={this.handleAddClient}>
                  Add New Client
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
     </> 
    );
  }
}

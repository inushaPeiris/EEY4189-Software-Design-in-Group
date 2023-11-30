import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../css/addPackage.css';
import Header from './Header';
import NavBar from './NavBar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class AddBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          packageName: '',
          startDate: new Date(),
          participants: '',
          requirements: '',
          payMethod: '',
        };
      }

    handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    });
    };

    handleDateChange = (date) => {
        this.setState({
          startDate: date,
        });
      };


  handleAddBooking = async (e) => {
    e.preventDefault();
  
    const {
        name,
        email,
        packageName,
        startDate,
        participants,
        requirements,
        payMethod,
    } = this.state;
  
    try {
      const res = await axios.post(
        'http://localhost:8000/booking/save',
        {
            name,
            email,
            packageName,
            startDate,
            participants,
            requirements,
            payMethod,
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
            email: '',
            packageName: '',
            startDate: '',
            participants: '',
            requirements: '',
            payMethod: '',
        });
        alert('Booking added successfully');
      } else {
        alert('Error adding booking');
      }
    } catch (error) {
      console.error('Error saving Client:', error);
      alert(`Error saving Client: ${error.response.data.error || 'Unknown error'}`);
    }
  };
  

  render() {
    const {
        name,
        email,
        packageName,
        startDate,
        participants,
        requirements,
        payMethod,
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
              <div className="headTopic">Add Booking Through System</div>
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

                <Form.Group className="mb-3" controlId="formGridAddress3">
                  <Form.Label className="form-label">Client Email</Form.Label>
                  <Form.Control
                    placeholder="Enter email address"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label className="form-label">Package Name</Form.Label>
                  <Form.Control
                    placeholder="Enter package name"
                    name="packageName"
                    value={packageName}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label className="form-label">Start Date</Form.Label>
                    <DatePicker
                        selected={startDate}
                        onChange={this.handleDateChange} // Use a separate function for date changes
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Enter start date"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress3">
                  <Form.Label className="form-label">Participants</Form.Label>
                  <Form.Control
                    placeholder="Enter participants"
                    name="participants"
                    value={participants}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress3">
                  <Form.Label className="form-label">Requirements</Form.Label>
                  <Form.Control
                    placeholder="Enter password"
                    name="requirements"
                    value={requirements}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress3">
                  <Form.Label className="form-label">PayMethod</Form.Label>
                  <Form.Control
                    placeholder="Enter payment method"
                    name="payMethod"
                    value={payMethod}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Button variant="primary" conClick={this.handleAddBooking} className='btn btn-success' style={{ backgroundColor: '#157347', color: 'white' }}>
                  Add New Booking
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

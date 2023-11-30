import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../css/addPackage.css';
import Header from './Header';
import NavBar from './NavBar';

export default class AddPackage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packageName: '',
      packageDescription: '',
      placesToVisit: '',
      cabService: '',
      hotel: '',
      numberOfDays: '',
      price: '',
      file: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      this.setState({
        file: file,
      });
    }
  };

  handleAddPackage = async (e) => {
    e.preventDefault();

    const {
        packageName,
        packageDescription,
        placesToVisit,
        cabService,
        hotel,
        numberOfDays,
        price,
        file,
    } = this.state;

    try {
        const data = new FormData();
        data.append('packageName', packageName);
        data.append('packageDescription', packageDescription);
        data.append('placesToVisit', placesToVisit);
        data.append('cabService', cabService);
        data.append('hotel', hotel);
        data.append('numberOfDays', numberOfDays);
        data.append('price', price);
        data.append('coverImage', file);
    
        const res = await axios.post('http://localhost:8000/package/save', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

      if (res.data.success) {
        this.setState({
          packageName: '',
          packageDescription: '',
          placesToVisit: '',
          cabService: '',
          hotel: '',
          numberOfDays: '',
          price: '',
          file: '',
        });
        alert('Package added successfully');
      } else {
        alert('Package added successfully');
      }
    } catch (error) {
      console.error('Error saving package:', error);
      alert('Error saving package');
    }
  };

  render() {
    const {
        packageName,
        packageDescription,
        placesToVisit,
        cabService,
        hotel,
        numberOfDays,
        price,
        // file,
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
              <div className="headTopic">Add New Package</div>
              <Form>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label className="form-label">Package Name</Form.Label>
                  <Form.Control
                    placeholder="Enter package name"
                    name="packageName"
                    value={packageName}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label className="form-label">Package Description</Form.Label>
                  <Form.Control
                    placeholder="Enter package description"
                    name="packageDescription"
                    value={packageDescription}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress3">
                  <Form.Label className="form-label">Places to Visit</Form.Label>
                  <Form.Control
                    placeholder="Enter places to visit"
                    name="placesToVisit"
                    value={placesToVisit}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="form-label">Cab Service</Form.Label>
                    <Form.Select
                      value={cabService}
                      onChange={(e) => this.setState({ cabService: e.target.value })}
                    >
                      <option value="Choose...">Choose...</option>
                      <option value="UBER">UBER</option>
                      <option value="Pick Me">Pick Me</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className="form-label">Hotel</Form.Label>
                    <Form.Control
                      placeholder="Enter hotel details"
                      name="hotel"
                      value={hotel}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="form-label">No of Dates</Form.Label>
                    <Form.Select
                      value={numberOfDays}
                      onChange={(e) => this.setState({ numberOfDays: e.target.value })}
                    >
                      <option>Choose...</option>
                      <option>1 day</option>
                      <option>2 days</option>
                      <option>5 days</option>
                      <option>7 days</option>
                      <option>30 days</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className="form-label">Price Per Person</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter price"
                      name="price"
                      value={price}
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} className="position-relative mb-3">
                    <Form.Label className="form-label">Cover Image</Form.Label>
                    <Form.Control
                      type="file"
                      required
                      name="file"
                      onChange={this.handleFileChange}
                    />
                  </Form.Group>
                </Row>

                <Button className='btn btn-success' style={{ backgroundColor: '#157347', color: 'white' }} onClick={this.handleAddPackage}>
                  Add New Package
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

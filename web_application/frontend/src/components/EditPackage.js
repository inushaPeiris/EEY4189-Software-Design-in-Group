import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../css/addPackage.css';
import Header from './Header';
import NavBar from './NavBar';


const EditPackage = () => {
    const { id } = useParams();

    const [packages, setPackage] = useState({});
    const [formData, setFormData] = useState({
        packageName: '',
        packageDescription: '',
        placesToVisit: '',
        cabService: 'Choose...',
        hotel: '',
        numberOfDays: 'Choose...',
        price: '',
        file: null,
    });


    useEffect(() => {
        const fetchPackage = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/package/update/${id}`);
                if (response.data.success) {
                    setPackage(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching package:', error);
            }
        };

        fetchPackage();
    }, [id]);

    useEffect(() => {
        setFormData({
            packageName: packages.packageName || '',
            packageDescription: packages.packageDescription || '',
            placesToVisit: packages.placesToVisit || '',
            cabService: packages.cabService || 'Choose...',
            hotel: packages.hotel || '',
            numberOfDays: packages.numberOfDays || 'Choose...',
            price: packages.price || '',
            file: null,
        });
    }, [packages]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
    };

    const handleSave = (e) => {
        e.preventDefault();

        const data = {
            packageName: formData.packageName,
            packageDescription: formData.packageDescription,
            placesToVisit: formData.placesToVisit,
            cabService: formData.cabService,
            hotel: formData.hotel,
            numberOfDays: formData.numberOfDays,
            price: formData.price,
            file: formData.file,
        };

        axios
            .put(`http://localhost:8000/package/update/${id}`, data)
            .then((res) => {
                if (res.data.success) {
                    alert('Package updated successfully');
                } else {
                    alert('Error updating package');
                }
            })
            .catch((error) => {
                console.error('Error saving package:', error);
                alert('Error saving package');
            });
    };

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
                  <div className="headTopic">Update Package</div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label className="form-label">Package Name</Form.Label>
                      <Form.Control
                        placeholder="Enter package name"
                        name="packageName"
                        value={formData.packageName}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <Form.Label className="form-label">Package Description</Form.Label>
                      <Form.Control
                        placeholder="Enter package description"
                        name="packageDescription"
                        value={formData.packageDescription}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formGridAddress3">
                      <Form.Label className="form-label">Places to Visit</Form.Label>
                      <Form.Control
                        placeholder="Enter places to visit"
                        name="placesToVisit"
                        value={formData.placesToVisit}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
    
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label className="form-label">Cab Service</Form.Label>
                        <Form.Select
                          value={formData.cabService}
                          onChange={handleInputChange}
                          name="cabService"
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
                          value={formData.hotel}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Row>
    
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label className="form-label">No of Dates</Form.Label>
                        <Form.Select
                          value={formData.numberOfDays}
                          onChange={handleInputChange}
                          name="numberOfDays"
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
                          value={formData.price}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
    
                      <Form.Group as={Col} className="position-relative mb-3">
                        <Form.Label className="form-label">Cover Image</Form.Label>
                        <Form.Control
                          type="file"
                          required
                          name="file"
                          onChange={handleFileChange}
                        />
                      </Form.Group>
                    </Row>
    
                    <Button variant="primary" className="button" onClick={handleSave} style={{backgroundColor: 'rgb(0, 0, 72)'}}>
                      Update Package
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div></>
      );
    };
    
export default EditPackage;


  


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import Header from './Header';
import NavBar from './NavBar';

const BookingDetails = () => {
  // State variables
  const [post, setPost] = useState({});
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Getting id from route parameters
  const { id } = useParams();

  // Fetching booking details on component mount
  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/booking/${id}`);
        if (response.data.success) {
          setPost(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching booking:', error);
      }
    };

    fetchBooking();
  }, [id]);

  // loading message
  if (Object.keys(post).length === 0) {
    return <div>Loading...</div>;
  }

  // Booking details
  const { name, email, packageName, startDate, participants, requirements, payMethod } = post;

  // Call function when payment is successful
  const onToken = (token) => {
    console.log(token);
    setPaymentSuccess(true);
  };

  return (
    <>
      {/* Header and Navigation Bar */}
      <Header />
      <NavBar />

      {/* Booking details section */}
      <div className='packageDetails'>
        <div style={{ marginTop: '20px' }}>
          <Container style={{ paddingTop: 0 }}>
            <Row className="align-items-center justify-content-between">
              <Col xs={3} md={2}></Col>
              <Col xs={12} md={10}>
                <h4>{name}</h4>
                <hr />

                {/* Displaying booking details */}
                <dl className="row">
                  <dt className="col-sm-3">Client Email</dt>
                  <dd className="col-sm-9">
                    <a href={`mailto:${post.email}`}>
                      {email}
                    </a>
                  </dd>
                  <dt className="col-sm-3">Selected Package</dt>
                  <dd className="col-sm-9">{packageName}</dd>
                  <dt className="col-sm-3">Start Date</dt>
                  <dd className="col-sm-9">{startDate}</dd>
                  <dt className="col-sm-3">Participants</dt>
                  <dd className="col-sm-9">{participants}</dd>
                  <dt className="col-sm-3">Requirements</dt>
                  <dd className="col-sm-9">{requirements}</dd>
                  <dt className="col-sm-3">Payment Method</dt>
                  <dd className="col-sm-9">{payMethod}</dd>
                </dl>

                {/* Stripe Checkout for payment */}
                <dl>
                  <StripeCheckout
                    token={onToken}
                    currency='lkr'
                    amount={'800000'}
                    name='Travelit Payment Gateway'
                    stripeKey="pk_test_51OI5jNAeFOhj3us836HmxYrkhPCfri6B0MsdFvvmoRLvWFTLqYZhvonGXcl1cpZAQVx5pxSGjnl5Qn237uuQsrAP00Vk76lhBU"
                  />
                  <p style={{ color: '#157347', padding: '10px' }}>
                    *If payment method "Cash" no need this action
                  </p>
                </dl>

                {/* Form to show payment success status */}
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Payment is successful"
                    checked={paymentSuccess} 
                    disabled={!paymentSuccess}
                  />
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default BookingDetails;

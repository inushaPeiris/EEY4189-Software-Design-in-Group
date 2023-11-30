import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const BookingDetails = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

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

  if (Object.keys(post).length === 0) {
    return <div>Loading...</div>;
  }

  const { name, email, packageName, startDate,participants,requirements,payMethod} = post;

  return (
    <>
    <Header />
    <NavBar />
    <div className='packageDetails'>
        <div style={{ marginTop: '20px' }}>
        <Container style={{ paddingTop: 0 }}>
            <Row className="align-items-center justify-content-between">
                <Col xs={3} md={2}></Col>
                <Col xs={12} md={10}>
                    <h4>{name}</h4>
                    <hr />
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

                    <dl>
                        <Link to="/payment">
                            <button variant="primary" className='btn btn-success' style={{ backgroundColor: '#157347', color: 'white' }}>
                                <i className='far fa-solid fa-credit-card'></i>&nbsp;&nbsp;Pay Online
                            </button>
                        </Link>
                        <p style={{color: '#157347',padding:'10px' }}>*If payment method "Cash" no need this action</p>
                    </dl>
                </Col>
            </Row>
        </Container>
        </div>
    </div>
    </>
  );
};

export default BookingDetails;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import { Container, Row, Col ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartFlatbedSuitcase } from '@fortawesome/free-solid-svg-icons';
import coverImg from '../assets/coverImg.png'

const ViewPackage = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/package/${id}`);
        if (response.data.success) {
          setPost(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching package:', error);
      }
    };

    fetchPackage();
  }, [id]);

  if (Object.keys(post).length === 0) {
    return <div>Loading...</div>;
  }

  const { packageName, description, placesToVisit, cabServices,hotel,numberOfDays,price} = post;

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
                    <h4>{packageName}</h4>
                    <hr />
                    <dl className="row">
                        <dt className="col-sm-3">Cover</dt>
                          <dd className="col-sm-9"><img
                              src={coverImg}
                              alt="Cover"
                              style={{ width: '80%', height: '100%', objectFit: 'cover' }}/>
                          </dd>
                        <dt className="col-sm-3">Description</dt>
                        <dd className="col-sm-9">{description}</dd>
                        <dt className="col-sm-3">Places To Visit</dt>
                        <dd className="col-sm-9">{placesToVisit}</dd>
                        <dt className="col-sm-3">Cab Service Provider</dt>
                        <dd className="col-sm-9">{cabServices}</dd>
                        <dt className="col-sm-3">Hotel Provider</dt>
                        <dd className="col-sm-9">{hotel}</dd>
                        <dt className="col-sm-3">Number Of Days</dt>
                        <dd className="col-sm-9">{numberOfDays}</dd>
                        <dt className="col-sm-3">Price Per Person</dt>
                        <dd className="col-sm-9">{price}</dd>
                        
                    </dl>

                    <dl>
                        <Link to="/addbooking">
                            <Button variant="primary" className='btn btn-success' style={{ backgroundColor: '#157347', color: 'white' }}>
                            <FontAwesomeIcon icon={faCartFlatbedSuitcase} style={{color: "#ffffff",}} />&nbsp;
                            Book Now
                            </Button>
                        </Link>
                    </dl>

                </Col>
            </Row>
        </Container>
        </div>
    </div>
    </>
  );
};

export default ViewPackage;
import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/packageDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import NavBar from './NavBar';

export default class viewfeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feeds: [],
    };
  }

  componentDidMount() {
    this.retrieveFeeds();
  }
  
  retrieveFeeds() {
    axios.get("http://localhost:8000/inquiries")
      .then(res => {
        if (res.data.success) {
          this.setState({
            feeds: res.data.data 
          });
          console.log(this.state.feeds);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }
  

  filterData(feeds, searchKey) {
    const result = feeds.filter((data) =>
      data.name.toLowerCase().includes(searchKey)
    );

    this.setState({ feeds: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:8000/inquiries")
      .then(res => {
        if (res.data.success) {
          this.filterData(res.data.data, searchKey);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }
  

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/inquiry/delete/${id}`).then((res) => {
      alert("Successfully Deleted");
      this.retrieveFeeds(); 
    });
  }

  render() {
    return (
      <>
      <Header/>
      <NavBar/>
      <div className='packageDetails'>
        <Container style={{ paddingTop: 0 }}>
          <Row className="align-items-center justify-content-between">
            <Col xs={3} md={2}></Col>
            <Col xs={12} md={10}>
              <div>
                <div className="headTopic">Clients' Feedbacks & Inquiries</div>
                <div className="headTopic d-flex justify-content-between align-items-center">
                
                  <div className="d-flex">
                  <input
                      className="form-control"
                      type="search"
                      placeholder="Search inquiries here by client name"
                      name="searchQuery"
                      onChange={this.handleSearchArea}
                      style={{ width: '300px' }}
                    />

                    <button className='btn btn-success ml-2' style={{ backgroundColor: '#157347', color: 'white' }}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff" }} />
                    </button>
                  </div>
                </div>
                <table className='table' style={{ margin: 0, padding: 0 }}>
                  <thead>
                    <tr>
                      <th scope='col'>No</th>
                      <th scope='col'>Client Name</th>
                      <th scope='col'>Email</th>
                      <th scope='col'>Topic</th>
                      <th scope='col'>Description</th>
                      <th scope='col' style={{ width: '20%' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.feeds.map((feed, index) => ( 
                      <tr key={index}>
                        <th scope='row'>{index + 1}</th>
                        <td>{feed.name}</td>
                        <td>
                          <a href={`mailto:${feed.email}`}>
                            {feed.email}
                          </a>
                        </td>
                        <td>{feed.topic}</td>
                        <td>{feed.inquiry}</td>
                        <td>
                          <button className='btn btn-danger' style={{ backgroundColor: '#bb2d3b', color: 'white' }} onClick={() => this.onDelete(feed._id)}>
                            <i className='far fa-trash-alt'></i>&nbsp;Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </div></>
    );
  }
}

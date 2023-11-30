import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSort } from '@fortawesome/free-solid-svg-icons'; // Import the sort icon
import Header from './Header';
import NavBar from './NavBar';

export default class ViewBooking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookings: [],
      sortDirection: 'asc', // Initial sorting direction
    };
  }

  componentDidMount() {
    this.retrieveBookings();
  }

  retrieveBookings() {
    axios.get("http://localhost:8000/bookings")
      .then(res => {
        if (res.data.success) {
          this.setState({
            bookings: res.data.data
          });
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

  filterData(bookings, searchKey) {
    const result = bookings.filter((data) =>
      data.name.toLowerCase().includes(searchKey)
    );

    this.setState({ bookings: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:8000/bookings")
      .then(res => {
        if (res.data.success) {
          this.filterData(res.data.data, searchKey);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

  handleSort = () => {
    const { sortDirection, bookings } = this.state;
    const sortedBookings = [...bookings].sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);

      if (sortDirection === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

    this.setState({
      bookings: sortedBookings,
      sortDirection: sortDirection === 'asc' ? 'desc' : 'asc',
    });
  };

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/booking/delete/${id}`).then((res) => {
      alert("Successfully Deleted");
      this.retrieveBookings();
    });
  }

  render() {
    const { sortDirection } = this.state;

    return (
      <>
        <Header />
        <NavBar />
        <div className='packageDetails'>
          <Container style={{ paddingTop: 0 }}>
            <Row className="align-items-center justify-content-between">
              <Col xs={3} md={2}></Col>
              <Col xs={12} md={10}>
                <div>
                  <div className="headTopic">All Bookings</div>
                  <div className="headTopic d-flex justify-content-between align-items-center">
                    <Link to="/addbooking">
                      <button className='btn btn-success' style={{ backgroundColor: '#157347', color: 'white' }}>
                        Make Booking Through Web
                      </button>
                    </Link>

                    <div className="d-flex">
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search bookings here"
                        name="searchQuery"
                        onChange={this.handleSearchArea}
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
                        <th scope='col'>
                            Package Name   
                        </th>
                        <th scope='col'>
                        <span onClick={this.handleSort} style={{ cursor: 'pointer' }}>
                            Start Date
                            {sortDirection === 'asc' ? (
                              <FontAwesomeIcon icon={faSort} style={{ marginLeft: '10px' }} />
                            ) : (
                              <FontAwesomeIcon icon={faSort} style={{ marginLeft: '5px', transform: 'rotate(180deg)' }} />
                            )}
                        </span>
                        </th>
                        <th scope='col'>Participants</th>
                        <th scope='col'>Requirements</th>
                        <th scope='col'>Payment Method</th>
                        <th scope='col' style={{ width: '20%' }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.bookings.map((booking, index) => (
                        <tr key={index}>
                          <th scope='row'>{index + 1}</th>
                          <td>
                          <a href={`/booking/${booking._id}`} 
                            style={{textDecoration:'none'}}>
                            {booking.name}
                            </a>
                          </td>
                          <td>
                            <a href={`mailto:${booking.email}`}>
                              {booking.email}
                            </a>
                          </td>
                          <td>{booking.packageName}</td>
                          <td>{booking.startDate}</td>
                          <td>{booking.participants}</td>
                          <td>{booking.requirements}</td>
                          <td>{booking.payMethod}</td>
                          <td>
                            <button className='btn btn-danger' style={{ backgroundColor: '#bb2d3b', color: 'white' }} onClick={() => this.onDelete(booking._id)}>
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
        </div>
      </>
    );
  }
}

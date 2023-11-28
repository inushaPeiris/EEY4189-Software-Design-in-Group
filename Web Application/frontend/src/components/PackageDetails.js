import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/packageDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import NavBar from './NavBar';

export default class PackageDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      packages: [],
    };
  }

  componentDidMount() {
    this.retrievePackages();
  }

  retrievePackages() {
    axios.get("http://localhost:8000/packages")
      .then(res => {
        if (res.data.success) {
          this.setState({
            packages: res.data.existingPackages
          });
          console.log(this.state.packages);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

  filterData(packages, searchKey) {
    const result = packages.filter((data) =>
      data.packageName.toLowerCase().includes(searchKey)
    );

    this.setState({ packages: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:8000/packages")
      .then(res => {
        if (res.data.success) {
          this.filterData(res.data.existingPackages, searchKey);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/package/delete/${id}`).then((res) => {
      alert("Successfully Deleted");
      this.retrievePackages();
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
                <div className="headTopic">All Packages</div>
                <div className="headTopic d-flex justify-content-between align-items-center">
                  <Link to="/addPackage">
                    <button className='btn btn-success' style={{ backgroundColor: '#157347', color: 'white' }}>
                      Add New Package
                    </button>
                  </Link>
                  <div className="d-flex">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search packages"
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
                      <th scope='col'>PackName</th>
                      <th scope='col'>Description</th>
                      <th scope='col'>PlaceToVisit</th>
                      <th scope='col'>CabServices</th>
                      <th scope='col'>Hotel</th>
                      <th scope='col'>NoOfDays</th>
                      <th scope='col'>Price</th>
                      <th scope='col'>CoverImage</th>
                      <th scope='col' style={{ width: '20%' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.packages.map((packages, index) => (
                      <tr key={index}>
                        <th scope='row'>{index + 1}</th>
                        <td>
                          <Link to={`/package/${packages._id}`} style={{ textDecoration: 'none' }}>
                            {packages.packageName}
                          </Link>
                        </td>
                        <td>{packages.description}</td>
                        <td>{packages.placesToVisit}</td>
                        <td>{packages.cabServices}</td>
                        <td>{packages.hotel}</td>
                        <td>{packages.numberOfDays}</td>
                        <td>{packages.price}</td>
                        <td>{packages.coverImage}</td>
                        <td>
                        <Link to={`/editPackage/${packages._id}`}>  
                          <button className='btn btn-warning' style={{ backgroundColor: '#ffca2c', color: 'black' }}>
                            <i className='fas fa-edit'></i>&nbsp;Edit
                          </button>
                          </Link>
                          &nbsp;
                          <button className='btn btn-danger' style={{ backgroundColor: '#bb2d3b', color: 'white' }} onClick={() => this.onDelete(packages._id)}>
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

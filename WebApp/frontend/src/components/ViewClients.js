import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/packageDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import NavBar from './NavBar';

export default class ViewClients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [],
    };
  }

  componentDidMount() {
    this.retrieveClients();
  }
  
  retrieveClients() {
    axios.get("http://localhost:8000/clients")
      .then(res => {
        if (res.data.success) {
          this.setState({
            clients: res.data.data 
          });
          console.log(this.state.clients);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }
  

  filterData(clients, searchKey) {
    const result = clients.filter((data) =>
      data.name.toLowerCase().includes(searchKey)
    );

    this.setState({ clients: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:8000/clients")
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
    axios.delete(`http://localhost:8000/client/delete/${id}`).then((res) => {
      alert("Successfully Deleted");
      this.retrieveClients();
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
                <div className="headTopic">All Clients</div>
                <div className="headTopic d-flex justify-content-between align-items-center">
                <Link to="/addClient">
                    <button className='btn btn-success' style={{ backgroundColor: '#157347', color: 'white' }}>
                    Add New Client Through Web
                    </button>
                  </Link>
                  
                  <div className="d-flex">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search clients here"
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
                      <th scope='col'>Name</th>
                      <th scope='col'>Address</th>
                      <th scope='col'>Email</th>
                      <th scope='col'>Username</th>
                      <th scope='col' style={{ width: '20%' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.clients.map((clients, index) => (
                      <tr key={index}>
                        <th scope='row'>{index + 1}</th>
                        <td>{clients.name}</td>
                        <td>{clients.address}</td>
                        <td>
                        <a href={`mailto:${clients.email}`}>
                            {clients.email}
                        </a>
                        </td>
                        <td>{clients.username}</td>
                        
                        <td>
                          <button className='btn btn-danger' style={{ backgroundColor: '#bb2d3b', color: 'white' }} onClick={() => this.onDelete(clients._id)}>
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

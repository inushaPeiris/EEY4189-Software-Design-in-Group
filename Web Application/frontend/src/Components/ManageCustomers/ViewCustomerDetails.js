import React, { Component } from "react";
import axios from "axios";
import Image2 from "../../Images/route.png";
import "./customers.css";

export default class allCustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { customers: [], searchId: "" };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8070/customer/")
      .then((response) => {
        this.setState({ customers: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:8070/customer/")
      .then((response) => {
        this.setState({ customers: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteCustomer = (id) => {
    axios.delete(`http://localhost:8070/customer/delete/${id}`).then((res) => {
      window.confirm("Are you sure to delete ? ");
    });
  };

  searchCustomer(event) {
    this.setState({ searchId: event.target.value.substr(0, 20) });
  }

  addCustomer() {
    this.props.history.push("/dashboard/addCustomer");
  }

  render() {
    let filtername = this.state.customers.filter((p) => {
      return p.name.indexOf(this.state.searchId) !== -1;
    });

    return (
      <div>
        <div id="topic_details">
          <h2>Customer Details</h2>
          <hr id="hr"></hr>
        </div>
        <div>
          <input
            className="form-control"
            type="search"
            placeholder="search by name"
            name="searchQuery"
            style={{
              width: "8cm",
              marginLeft: "7.5cm",
              marginTop: "1cm",
              borderRadius: "9px",
            }}
            value={this.state.searchId}
            onChange={this.searchCustomer.bind(this)}
          />
        </div>

        <div>
          <a className="btn btn-warning" id="btn3" href="/dashboard/addCustomer">
            <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Add
            Customer
          </a>
        </div>

        <div id="table1">
          <table id="customer_table" style={{ textAlign: "center" }}>
            <thead>
              <tr style={{ textAlign: "left" }}>
                <span>
                  <span id="text1">Customers</span>
                  <div>
                    <img
                      src={Image2}
                      id="iconimage"
                      style={{ marginTop: "-1cm" }}
                    />
                  </div>
                </span>
              </tr>

              <tr>
                <th style={{ textAlign: "center" }}>Name</th>
                <th style={{ textAlign: "center" }}>Contact</th>
                <th style={{ textAlign: "center" }}>Email</th>
                <th style={{ textAlign: "center" }}>Address</th>
                <th style={{ textAlign: "center", width: "5cm" }}>Status</th>
              </tr>
            </thead>

            <tbody>
              {filtername.map((p, index) => {
                return (
                  <tr key={index}>
                    <td>{p.name}</td>
                    <td>{p.contact}</td>
                    <td>{p.email}</td>
                    <td>{p.address}</td>

                    <td>
                      <a
                        className="btn btn-warning"
                        id="btn1"
                        href={`/dashboard/updatecustomer/${p._id}`}
                      >
                        <i class="fas fa-edit "></i>&nbsp;&nbsp;Edit
                      </a>

                      <a
                        className="btn btn-danger"
                        id="btn2"
                        onClick={() => this.deleteCustomer(p._id)}
                      >
                        <i
                          class="fa fa-trash blackiconcolor"
                          aria-hidden="true"
                        ></i>
                        &nbsp;&nbsp;Delete&nbsp;
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

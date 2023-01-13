import React, { Component, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import Image1 from '../../Images/bus.JPG'
import "./customers.css";

const initialState = {
  name: "",
  contact: "",
  email: "",
  address: "",
  password: "",
  nameError: "",
  contactError: "",
  emailError: "",
  addressError: "",
  passwordError: "",
};

toast.configure();

class AddCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.changenameHandler = this.changenameHandler.bind(this);
    this.changecontactHandler = this.changecontactHandler.bind(this);
    this.changeemailHandler = this.changeemailHandler.bind(this);
    this.changeaddressHandler = this.changeaddressHandler.bind(this);
    this.changepasswordHandler = this.changepasswordHandler.bind(this);
  }
  notify() {
    toast.warn("New Customer Details Added Successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  validate = () => {
    let nameError = "";
    let contactError = "";
    let emailError = "";
    let addressError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "Customer Name is Required";
    }
    if (!this.state.contact) {
      contactError = "Customer contact is Required";
    }
    if (!this.state.email) {
      emailError = "Customer email is Required";
    }
    if (!this.state.address) {
      addressError = "Customer address is Required";
    }
    if (!this.state.password) {
      passwordError = "Password is Required";
    }
    

    if (
      nameError ||
      contactError ||
      emailError ||
      addressError ||
      passwordError 
    ) {
      this.setState({
        nameError,
        contactError,
        emailError,
        addressError,
        passwordError
      });
      return false;
    }

    return true;
  };

  sendData = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const newCustomer = {
        name: this.state.name,
        contact: this.state.contact,
        email: this.state.email,
        address: this.state.address,
        password: this.state.password,
      };

      axios
        .post("http://localhost:8070/customer/add", newCustomer)
        .then(() => {
          alert("customer Details Added");
          this.notify();
          this.props.history.push("/dashboard/allcustomers");
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  changenameHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  changecontactHandler = (event) => {
    this.setState({ contact: event.target.value });
  };
  changeemailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changeaddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };
  changepasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="form_customer">
        <br></br>
        <br></br>
        <h2 id="headertext1">Add Customer Detils</h2>

        <form onSubmit={this.sendData} id="form_customer">
          <div className="row">
            <label htmlFor="name" class="ftext">
              Name
            </label>

            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Customer Name"
              value={this.state.name}
              onChange={this.changenameHandler}
            />

            <div style={{ fontSize: "14px", color: "red" }}>
              {this.state.nameError}
            </div>
          </div>

          <div className="row">
            <label htmlFor="contact" class="ftext">
              Contact Number
            </label>

            <input
              type="text"
              className="form-control"
              id="contact"
              placeholder="contact"
              value={this.state.contact}
              onChange={this.changecontactHandler}
            />
            <div style={{ fontSize: "14px", color: "red" }}>
              {this.state.contactError}
            </div>
          </div>

          <div className="row">
            <label htmlFor="email">Email</label>

            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.changeemailHandler}
            />
            <div style={{ fontSize: "14px", color: "red" }}>
              {this.state.emailError}
            </div>
          </div>

          <div className="row">
            <label htmlFor="address">Address</label>

            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Address"
              value={this.state.address}
              onChange={this.changeaddressHandler}
            />
            <div style={{ fontSize: "14px", color: "red" }}>
              {this.state.addressError}
            </div>
          </div>

          <div className="row">
            <label htmlFor="password">Password</label>

            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.changepasswordHandler}
            />
            <div style={{ fontSize: "14px", color: "red" }}>
              {this.state.passwordError}
            </div>
          </div>

          <button type="submit" id="#">
            Add Customer
          </button>
        </form>

        {/* <div>
                    <img  src={Image1} id="image"/>
                </div> */}
      </div>
    );
  }
}
export default AddCustomer;

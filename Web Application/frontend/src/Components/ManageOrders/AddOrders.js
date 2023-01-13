import React, { Component, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import Image1 from '../../Images/bus.JPG'
import "./orders.css";

const initialState = {
  cusName: "",
  order_item: "",
  email: "",
  placeStart: "",
  totalPrice: "",
  orderDate: "",
  status: "",
  cusNameError: "",
  order_itemError: "",
  emailError: "",
  placeStartError: "",
  totalPriceError: "",
  orderDateError: "",
  statusError: "",
};

toast.configure();

class AddOrder extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.changecusNameHandler = this.changecusNameHandler.bind(this);
    this.changeorder_itemHandler = this.changeorder_itemHandler.bind(this);
    this.changeemailHandler = this.changeemailHandler.bind(this);
    this.changeplaceStartHandler = this.changeplaceStartHandler.bind(this);
    this.changetotalPriceHandler = this.changetotalPriceHandler.bind(this);
    this.changeorderDateHandler = this.changeorderDateHandler.bind(this);
    this.changestatusdHandler = this.changestatusdHandler.bind(this);
  }
  notify() {
    toast.warn("Order Details Added Successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  validate = () => {
    let cusNameError = "";
    let order_itemError = "";
    let emailError = "";
    let placeStartError = "";
    let totalPriceError = "";
    let orderDateError = "";
    let statusError = "";

    if (!this.state.cusName) {
      cusNameError = "Customer Name is Required";
    }
    if (!this.state.order_item) {
      order_itemError = "Package is Required";
    }
    if (!this.state.email) {
      emailError = "Email is Required";
    }
    if (!this.state.placeStart) {
      placeStartError = "Start Place is Required";
    }
    if (!this.state.totalPrice) {
      totalPriceError = "Total Price is Required";
    }
    if (!this.state.orderDate) {
      orderDateError = "Ordered Date is Required";
    }
    if (!this.state.status) {
      statusError = "Ststus is Required";
    }

    if (
      cusNameError ||
      order_itemError ||
      emailError ||
      placeStartError ||
      totalPriceError ||
      orderDateError ||
      statusError
    ) {
      this.setState({
        cusNameError,
        order_itemError,
        emailError,
        placeStartError,
        totalPriceError,
        orderDateError,
        statusError,
      });
      return false;
    }

    return true;
  };

  sendData = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const newOrder = {
        cusName: this.state.cusName,
        order_item: this.state.order_item,
        email: this.state.email,
        placeStart: this.state.placeStart,
        totalPrice: this.state.totalPrice,
        orderDate: this.state.orderDate,
        status: this.state.status,
      };

      axios
        .post("http://localhost:8070/order/add", newOrder)
        .then(() => {
          alert("order Details Added");
          this.notify();
          this.props.history.push("/dashboard/allorders");
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  changecusNameHandler = (event) => {
    this.setState({ cusName: event.target.value });
  };
  changeorder_itemHandler = (event) => {
    this.setState({ order_item: event.target.value });
  };
  changeemailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changeplaceStartHandler = (event) => {
    this.setState({ placeStart: event.target.value });
  };
  changetotalPriceHandler = (event) => {
    this.setState({ totalPrice: event.target.value });
  };
  changeorderDateHandler = (event) => {
    this.setState({ orderDate: event.target.value });
  };
  changestatusdHandler = (event) => {
    this.setState({ status: event.target.value });
  };

  render() {
    return (
      <div className="form_order">
        <br></br>
        <br></br>
        <h2 id="headertext1">Add Order Detils</h2>

        <form onSubmit={this.sendData} id="form_order">
          <div className="row">
            <label htmlFor="cusName" class="ftext">
              Customer Name
            </label>

            <input
              type="text"
              className="form-control"
              id="cusName"
              value={this.state.cusName}
              onChange={this.changecusNameHandler}
            />

            <div style={{ fontSize: "14px", color: "red" }}>
              {this.state.cusNameError}
            </div>
          </div>

          <div className="row">
            <label htmlFor="cusName" class="ftext">
              Customer Name
            </label>

            <input
              type="text"
              className="form-control"
              id="cusName"
              value={this.state.cusName}
              onChange={this.changecusNameHandler}
            />

            <div style={{ fontSize: "14px", color: "red" }}>
              {this.state.cusNameError}
            </div>
                </div>
                
                

          <div className="row">
            <label htmlFor="order_item">Package</label>

            <select
              style={{ height: "1cm" }}
              className="form-control"
              id="order_item"
              value={this.state.order_item}
              onChange={this.changeorder_itemHandler}
            >
              <option>Select Package</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

            <div style={{ fontSize: "14px", color: "red" }}>
              {this.state.order_itemError}
            </div>
          </div>

          <div className="row">
            <label htmlFor="email" class="ftext">
              Email
            </label>

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
            <label htmlFor="placeStart">Start Place</label>

            <input
              type="text"
              className="form-control"
              id="placeStart"
              placeholder="Package placeStart"
              value={this.state.placeStart}
              onChange={this.changeplaceStartHandler}
            />
            <div style={{ fontSize: "14px", color: "red" }}>
              {this.state.placeStartError}
            </div>
          </div>

          <div className="row">
            <label htmlFor="totalPrice">Total Price</label>

            <input
              type="text"
              className="form-control"
              id="totalPrice"
              placeholder="Package Rich Description"
              value={this.state.totalPrice}
              onChange={this.changetotalPriceHandler}
            />
            <div style={{ fontSize: "14px", color: "red" }}>
              {this.state.totalPriceError}
            </div>
          </div>

          <div className="row">
            <label htmlFor="orderDate">Order Date</label>

            <input
              type="text"
              className="form-control"
              id="orderDate"
              placeholder="Date"
              value={this.state.orderDate}
              onChange={this.changeorderDateHandler}
            />
            <div style={{ fontSize: "14px", color: "red" }}>
              {this.state.orderDateError}
            </div>
          </div>

          <button type="submit" id="#">
            Add Order
          </button>
        </form>

        {/* <div>
                    <img  src={Image1} id="image"/>
                </div> */}
      </div>
    );
  }
}
export default AddOrder;

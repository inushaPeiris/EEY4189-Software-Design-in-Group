import React, { Component } from "react";
import axios from "axios";
import "./orders.css";
//import Image1 from '../../Images/bus_route_image.png'

export default class UpdateOrder extends Component {
  constructor(props) {
    super(props);

    this.onChangestatus = this.onChangestatus.bind(this);
    
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      cusName: "",
      order_item: "",
      email: "",
      placeStart: "",
      totalPrice: "",
      orderDate: "",
      status: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8070/order/get/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          cusName: response.data.order.cusName,
          order_item: response.data.order.order_item,
          email: response.data.order.email,
          placeStart: response.data.order.placeStart,
          totalPrice: response.data.order.totalPrice,
          orderDate: response.data.order.orderDate,
          status: response.data.order.status,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangestatus(e) {
    this.setState({ status: e.target.value });
  }
  

  onSubmit(e) {
    e.preventDefault();
    const obj = {

      cusName: this.statecusName,
      order_item: this.stateorder_item,
      email: this.stateemail,
      placeStart: this.stateplaceStart,
      totalPrice: this.statetotalPrice,
      orderDate: this.stateorderDate,
      status: this.statestatus,
    };

    axios
      .put(
        "http://localhost:8070/order/update/" + this.props.match.params.id,
        obj
      )
      .then((res) => console.log(res.data), alert("Updated Successfully"));

    this.props.history.push("/dashboard/allorders");
  }

  render() {
    return (
      <div className="form_order">
        <br></br>
        <br></br>
        <h2 id="headertext">Edit Order Status Details</h2>

        <form onSubmit={this.onSubmit} id="form_order">
          <div className="row" required>
            <label htmlFor="cusName"> Customer Name </label>
            <input
              type="text"
              className="form-control"
              id="cusName"
              required
              value={this.state.cusName}
            />
          </div>

          <div className="row" required>
            <label htmlFor="order_item">Package </label>
            <input
              type="text"
              className="form-control"
              id="order_item"
              required
              value={this.state.order_item}
            />
          </div>

          <div className="row" required>
            <label htmlFor="email">Email </label>
            <input
              type="text"
              className="form-control"
              id="email"
              required
              value={this.state.email}
            />
          </div>

          <div className="row" required>
            <label htmlFor="placeStart">Start Place</label>
            <input
              type="text"
              className="form-control"
              id="placeStart"
              required
              value={this.state.placeStart}
            />
          </div>

          <div className="row" required>
            <label htmlFor="totalPrice">total Price</label>
            <input
              type="text"
              className="form-control"
              id="totalPrice"
              required
              value={this.state.totalPrice}
            />
          </div>

          <div className="row" required>
            <label htmlFor="orderDate">Order Date</label>
            <input
              type="text"
              className="form-control"
              id="orderDate"
              required
              value={this.state.orderDate}
            />
          </div>

          <div className="row">
            <label htmlFor="status">Status </label>
            <select
              style={{ height: "1cm" }}
              className="form-control"
              id="status"
              value={this.state.status}
              onChange={this.onChangestatus}
            >
              <option>Change Status</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <button type="submit">Update</button>
          <br />
          <br />
        </form>

        {/* <div>
                    <img src={Image1} id="image1"/>
                </div> */}
      </div>
    );
  }
}

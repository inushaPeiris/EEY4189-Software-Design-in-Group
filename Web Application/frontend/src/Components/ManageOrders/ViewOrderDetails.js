import React, { Component } from "react";
import axios from "axios";
import Image2 from "../../Images/route.png";
import "./orders.css";

export default class allOrders extends Component {
  constructor(props) {
    super(props);
    this.state = { orders: [], searchId: "" };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8070/order/")
      .then((response) => {
        this.setState({ orders: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:8070/order/")
      .then((response) => {
        this.setState({ orders: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteOrder = (id) => {
    axios.delete(`http://localhost:8070/order/delete/${id}`).then((res) => {
      window.confirm("Are you sure to delete ? ");
    });
  };

  searchOrder(event) {
    this.setState({ searchId: event.target.value.substr(0, 20) });
  }

  addOrder() {
    this.props.history.push("/dashboard/addOrder");
  }

  render() {
    let filtername = this.state.orders.filter((p) => {
      return p.email.indexOf(this.state.searchId) !== -1;
    });

    return (
      <div>
        <div id="topic_details">
          <h2>Order Details</h2>
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
            onChange={this.searchOrder.bind(this)}
          />
        </div>

        <div>
          <a className="btn btn-warning" id="btn3" href="/dashboard/addOrder">
            <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Add
            Order
          </a>
        </div>

        <div id="table1">
          <table id="order_table" style={{ textAlign: "center" }}>
            <thead>
              <tr style={{ textAlign: "left" }}>
                <span>
                  <span id="text1">Orders</span>
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
                <th style={{ textAlign: "center" }}>Customer Name</th>
                <th style={{ textAlign: "center" }}>Package</th>
                <th style={{ textAlign: "center" }}>Order Date</th>
                <th style={{ textAlign: "center" }}>Status</th>
                <th style={{ textAlign: "center", width: "5cm" }}>View</th>
                <th style={{ textAlign: "center", width: "5cm" }}>Status</th>
              </tr>
            </thead>

            <tbody>
              {filtername.map((p, index) => {
                return (
                  <tr key={index}>
                    <td>{p.cusName}</td>
                    <td>{p.order_item}</td>
                    <td>{p.orderDate}</td>
                    <td>{p.status}</td>
                    

                    <td>
                      <a
                        className="btn btn-warning"
                        id="btn1"
                        href={`/dashboard/updateorder/${p._id}`}
                      >
                        <i class="fas fa-edit "></i>&nbsp;&nbsp;Edit
                      </a>

                      <a
                        className="btn btn-danger"
                        id="btn2"
                        onClick={() => this.deleteOrder(p._id)}
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

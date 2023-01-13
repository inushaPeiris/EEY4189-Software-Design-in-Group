import React, { Component } from "react";
import axios from "axios";
import "./customers.css";
//import Image1 from '../../Images/bus_route_image.png'

export default class UpdateCustomer extends Component {
  constructor(props) {
    super(props);

    this.onChangename = this.onChangename.bind(this);
    this.onChangecontact = this.onChangecontact.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangeaddress = this.onChangeaddress.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      contact: "",
      email: "",
      address: "",
      password: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8070/customer/get/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.customer.name,
          contact: response.data.customer.contact,
          email: response.data.customer.email,
          address: response.data.customer.address,
          password: response.data.customer.password,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangename(e) {
    this.setState({ name: e.target.value });
  }
  onChangecontact(e) {
    this.setState({ contact: e.target.value });
  }
  onChangeemail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeaddress(e) {
    this.setState({ address: e.target.value });
  }
  onChangepassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      contact: this.state.contact,
      email: this.state.email,
      address: this.state.address,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .put(
        "http://localhost:8070/customer/update/" + this.props.match.params.id,
        obj
      )
      .then((res) => console.log(res.data), alert("Updated Successfully"));

    this.props.history.push("/dashboard/allcustomers");
  }

  render() {
    return (
      <div className="form_customer">
        <br></br>
        <br></br>
        <h2 id="headertext">Edit Customer Details</h2>

        <form onSubmit={this.onSubmit} id="form_customer">
          <div className="row" required>
            <label htmlFor="name"> Name </label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={this.state.name}
              onChange={this.onChangename}
            />
          </div>

          <div className="row" required>
            <label htmlFor="contact">Contact Number </label>
            <input
              type="text"
              className="form-control"
              id="contact"
              required
              value={this.state.contact}
              onChange={this.onChangecontact}
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
              onChange={this.onChangeemail}
            />
          </div>

          <div className="row" required>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              required
              value={this.state.address}
              onChange={this.onChangeaddress}
            />
          </div>

          <div className="row" required>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="form-control"
              id="password"
              required
              value={this.state.password}
              onChange={this.onChangepassword}
            />
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

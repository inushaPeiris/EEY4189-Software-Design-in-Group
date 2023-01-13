import React, { Component } from "react";
import axios from "axios";
import "./feedback.css";
//import Image1 from '../../Images/bus_route_image.png'

export default class updateFeedback extends Component {

  constructor(props) {
    super(props);

    this.onChangetopic = this.onChangetopic.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangecontact = this.onChangecontact.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangemessage = this.onChangemessage.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      topic: "",
      name: "",
      contact: "",
      email: "",
      message: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8070/feedback/get/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          topic: response.data.feedback.topic,
          name: response.data.feedback.name,
          contact: response.data.feedback.contact,
          email: response.data.feedback.email,
          message: response.data.feedback.message,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangetopic(e) {
    this.setState({ topic: e.target.value });
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
  onChangemessage(e) {
    this.setState({ message: e.target.value });
    }
    
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      topic: this.state.topic,
      name: this.state.name,
      contact: this.state.contact,
      email: this.state.email,
      message: this.state.message,
    };

    axios
      .put(
        "http://localhost:8070/feedback/update/" + this.props.match.params.id,
        obj
      )
      .then((res) => console.log(res.data), alert("Updated Successfully"));

    this.props.history.push("/dashboard/allfeedbacks");
  }

  render() {
    return (
      <div className="form_feedback">
        <br></br>
        <br></br>
        <h2 id="headertext" style={{marginLeft:"18cm", marginTop:"2cm", fontWeight:"bold"}}>Update Feedback Details</h2>

        <form onSubmit={this.onSubmit} id="form_feedback">
          <div className="row" required>
            <label htmlFor="topic">Feedback Topic </label>
            <input
              type="text"
              className="form-control"
              id="topic"
              required
              value={this.state.topic}
              onChange={this.onChangetopic}
            />
          </div>

          <div className="row" required>
            <label htmlFor="name">Name </label>
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
            <label htmlFor="contact">Contact </label>
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
            <label htmlFor="email">Email</label>
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
            <label htmlFor="message">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              required
              value={this.state.message}
              onChange={this.onChangemessage}
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

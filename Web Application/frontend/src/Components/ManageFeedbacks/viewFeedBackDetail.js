import React, { Component } from "react";
import axios from "axios";
import "./feedback.css";

export default class viewFeedbackDetail extends Component {
  constructor(props) {
    super(props);

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
    

  addFeedback() {
    this.props.history.push("/dashboard/allfeedbacks");
    }
    

  render() {
    return (
      <div className="box2">
        <div>
          <div id="topic_details">
            <h2>Feedback Details</h2>
            <hr id="hr"></hr>
          </div>

          <div style={{ marginTop: "1.5cm" }}>
            <a
              className="btn btn-warning"
              id="btn3"
              href="/dashboard/allfeedbacks"
            >
              <i aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;All Feedback
            </a>
          </div>
        </div>

        <div
          className="container"
          style={{
            marginTop: "-1cm",
            border: "1px solid white",
            marginBottom: "2cm",
            background: "rgba(255,255,255,0.838)",
            fontSize: "20px",
            borderRadius: "10px",
            marginLeft: "10cm",
          }}
        >
          <br />

          <span id="heading2">
            <h1 style={{ fontWeight: "bold"}}>
              Topic&nbsp;: &nbsp;&nbsp;&nbsp;{this.state.topic}
            </h1>
                </span>
            <br />
          <table>
            <tr>
              <td style={{ fontWeight: "bold", width: "6cm", height:"1.5cm"}}>Name</td>
              <td>{this.state.name}</td>
            </tr>

            <tr>
              <td style={{ fontWeight: "bold", width: "6cm", height:"1.5cm" }}>Contact Number</td>
              <td>{this.state.contact}</td>
            </tr>

            <tr>
              <td style={{ fontWeight: "bold", width: "6cm", height:"1.5cm" }}>Email</td>
              <td>{this.state.email}</td>
            </tr>

            <tr>
              <td style={{ fontWeight: "bold", width: "6cm", height:"1.5cm" }}>Message</td>
              <td>{this.state.message}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

import React, {Component, useState} from 'react';
import axios from "axios";
import {useHistory,} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
//import Image1 from '../../Images/bus.JPG'
import './feedback.css';

const initialState = {

    topic: '',
    name:'',
    contact:'',
    email:'',
    message:'',
    topicError: '',
    nameError: '',
    contactError:'',
    emailError:'',
    messageError:'',
}

toast.configure()

class AddFeedback extends Component {

    constructor(props){
        super(props)

        this.state = initialState;

        this.changetopicHandler= this.changetopicHandler.bind(this);
        this.changenameHandler= this.changenameHandler.bind(this);
        this.changecontactHandler= this.changecontactHandler.bind(this);
        this.changeemailHandler= this.changeemailHandler.bind(this);
        this.changemessageHandler= this.changemessageHandler.bind(this);
    }
    notify(){
        toast.warn('Feedback Details Added Successfully!', 
        {
            position: toast.POSITION.TOP_CENTER
        })

    }

    validate =()=>{ 
       let topicError = "";
       let nameError =  "";
       let contactError =  "";
       let emailError =  "";
       let messageError =  "";
       
          if(!this.state.topic) {
            topicError ='Feedback Topic is Required';
          }
          if(!this.state.name) {
            nameError='Feedback name is Required';
          }
          if(!this.state.contact) {
            contactError= 'Feedback contact is Required';
          }
          if(!this.state.email) {
            emailError= 'Feedback email is Required';
          }
          if(!this.state.message) {
            messageError ='Message is Required';
          }
          
          if (topicError || nameError || contactError || emailError || messageError  ){
              this.setState({topicError , nameError, contactError, emailError, messageError });
              return false;
          }

          return true;

    };
    
    sendData = (e)=>{
        e.preventDefault();
        const isValid = this.validate();
        if(isValid){
            
            const newFeedback ={

                topic:this.state.topic,
                name:this.state.name,
                contact:this.state.contact,
                email:this.state.email,
                message:this.state.message,
            }

            axios.post("http://localhost:8070/feedback/add", newFeedback).then(()=>{
                alert("Feedback Details Added")
                this.notify();
                this.props.history.push("/dashboard/allfeedbacks");
  
            }).catch((err)=>{
                alert(err)
            })
        }    
    };

    changetopicHandler = (event) => {
        this.setState({topic: event.target.value});
    }
    changenameHandler =(event) => {
        this.setState({name: event.target.value});
    }
    changecontactHandler = (event) => {
        this.setState({contact: event.target.value});
    }
    changeemailHandler = (event) => {
        this.setState({email: event.target.value});
    }
    changemessageHandler = (event) => {
        this.setState({message: event.target.value});
    }
    render(){
        return(

            <div className ="form_feedback" >

                <br></br>
                <br></br>
                <h2 id="headertext1">
                        Add Feedback 
                    </h2>

                <form onSubmit={this.sendData} id="form_feedback">

                    <div className="row">
                        <label 
                            htmlFor="topic" 
                            class="ftext"
                        >
                            Fedback Topic
                        </label>

                        <input 
                            type="text" 
                            className="form-control" 
                            id="topic" 
                            placeholder="topic"  
                            value={this.state.topic}
                            onChange ={
                                this.changetopicHandler
                            }  
                        />

                        <div style ={{fontSize:"14px", color:"red"}}>
                            {this.state.topicError}
                        </div>
                    </div>

                    <div className="row">
                        <label 
                            htmlFor="name" 
                            class="ftext"
                        >
                            Feedback Name 
                        </label>

                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            placeholder="Name"  
                            value={this.state.name}
                            onChange ={
                                this.changenameHandler
                            }  
                        />

                        <div style ={{fontSize:"14px", color:"red"}}>
                            {this.state.nameError}
                        </div>
                    </div>

                    <div className="row">
                        <label 
                            htmlFor="contact" 
                            class="ftext"
                        >
                            Contact Details 
                        </label>

                        <input 
                            type="text" 
                            className="form-control" 
                            id="contact" 
                            placeholder="contact" 
                            value={ this.state.contact }
                            onChange = { this.changecontactHandler } 
                        />
                        <div style ={{fontSize:"14px", color:"red"}}>
                            {this.state.contactError}
                        </div>
                    </div>

                    <div className="row">
                        <label 
                            htmlFor="email"
                        >
                            Email 
                        </label>

                        <input 
                            type="text" 
                            className="form-control" 
                            id="email" 
                            placeholder="email"  
                            value={this.state.email}
                            onChange = { this.changeemailHandler }
                        />
                        <div style ={{fontSize:"14px", color:"red"}}>
                            {this.state.emailError}
                        </div>
                    </div>

                    <div className="row">
                        <label 
                            htmlFor="message"
                        >
                            Message
                        </label>

                        <input 
                            type="text" 
                            className="form-control" 
                            id="nessage" 
                            placeholder="message"  
                            value={this.state.message}
                            onChange = { this.changemessageHandler }
                        />
                        <div style ={{fontSize:"14px", color:"red"}}>
                            {this.state.messageError}
                        </div>
                    </div>

                    <button type="submit"  id = "#">Post Feedback</button>
                </form>

                {/* <div>
                    <img  src={Image1} id="image"/>
                </div> */}
            </div>
        );  
    }
}
export default AddFeedback;

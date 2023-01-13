import React, {Component, useState} from 'react';
import axios from "axios";
import {useHistory,} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
//import Image1 from '../../Images/bus.JPG'
import './packages.css';

const initialState = {
    name: '',
    category:'',
    price:'',
    description:'',
    rich_description:'',
    create_date:'',
    nameError: '',
    categoryError:'',
    priceError:'',
    descriptionError:'',
    rich_descriptionError:'',
    create_dateError:'',
}

toast.configure()

class AddPackage extends Component {
    constructor(props){
        super(props)

        this.state = initialState;

        this.changenameHandler= this.changenameHandler.bind(this);
        this.changecategoryHandler= this.changecategoryHandler.bind(this);
        this.changepriceHandler= this.changepriceHandler.bind(this);
        this.changedescriptionHandler= this.changedescriptionHandler.bind(this);
        this.changerich_descriptionHandler= this.changerich_descriptionHandler.bind(this);
        this.changecreate_dateHandler= this.changecreate_dateHandler.bind(this);
        

    }
    notify(){
        toast.warn('Package Details Added Successfully!', 
        {
            position: toast.POSITION.TOP_CENTER
        })

    }

    validate =()=>{ 
       let nameError = "";
       let categoryError =  "";
       let priceError =  "";
       let descriptionError =  "";
       let rich_descriptionError =  "";
       let create_dateError =  "";
          
  
          if(!this.state.name) {
            nameError ='Package Name is Required';
          }
          if(!this.state.category) {
            categoryError='Package Category is Required';
          }
          if(!this.state.price) {
            priceError= 'Package Price is Required';
          }
          if(!this.state.description) {
            descriptionError= 'Package Description is Required';
          }
          if(!this.state.rich_description) {
            rich_descriptionError ='Rich Description is Required';
          }
          if(!this.state.create_date) {
            create_dateError ='Package Create Date is Required';
          }
          
          if (nameError || categoryError || priceError || descriptionError || rich_descriptionError || create_dateError  ){
              this.setState({nameError , categoryError, priceError, descriptionError, rich_descriptionError, create_dateError });
              return false;
          }

          return true;

    };
    
    sendData = (e)=>{
        e.preventDefault();
        const isValid = this.validate();
        if(isValid){
            
            const newPackage ={

                name:this.state.name,
                category:this.state.category,
                price:this.state.price,
                description:this.state.description,
                rich_description:this.state.rich_description,
                create_date:this.state.create_date

            }

            axios.post("http://localhost:8070/package/add", newPackage).then(()=>{
                alert("Package Details Added")
                this.notify();
                this.props.history.push('/dashboard/allpackages');

                
            }).catch((err)=>{
                alert(err)
            })
        }    
    };

    changenameHandler = (event) => {
        this.setState({name: event.target.value});
    }
    changecategoryHandler =(event) => {
        this.setState({category: event.target.value});
    }
    changepriceHandler = (event) => {
        this.setState({price: event.target.value});
    }
    changedescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }
    changerich_descriptionHandler = (event) => {
        this.setState({rich_description: event.target.value});
    }
    changecreate_dateHandler = (event) => {
        this.setState({create_date: event.target.value});
    }
    
    render(){
        return(

            <div className ="form_package" >

                <br></br>
                <br></br>
                <h2 id="headertext1">
                        Add package Detils 
                    </h2>

                <form onSubmit={this.sendData} id="form_package">

                    <div className="row">
                        <label 
                            htmlFor="name" 
                            class="ftext"
                        >
                            Package Name 
                        </label>

                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            placeholder="package Name"  
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
                            htmlFor="category">Package Category 
                        </label>

                        <select 
                            style ={{height:"1cm"}} 
                            className="form-control" 
                            id="category" 
                            value={this.state.category} 
                            onChange = {this.changecategoryHandler}
                        >
                            <option>Select Category</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>    
                        </select>

                        <div style ={{fontSize:"14px", color:"red"}}>
                            {this.state.categoryError}
                        </div>
                    </div>

                    <div className="row">
                        <label 
                            htmlFor="price" 
                            class="ftext"
                        >
                            Package Price 
                        </label>

                        <input 
                            type="text" 
                            className="form-control" 
                            id="price" 
                            placeholder="Package Price" 
                            value={ this.state.price }
                            onChange = { this.changepriceHandler } 
                        />
                        <div style ={{fontSize:"14px", color:"red"}}>
                            {this.state.priceError}
                        </div>
                    </div>

                    <div className="row">
                        <label 
                            htmlFor="description"
                        >
                            Description 
                        </label>

                        <input 
                            type="text" 
                            className="form-control" 
                            id="description" 
                            placeholder="Package Description"  
                            value={this.state.description}
                            onChange = { this.changedescriptionHandler }
                        />
                        <div style ={{fontSize:"14px", color:"red"}}>
                            {this.state.descriptionError}
                        </div>
                    </div>

                    <div className="row">
                        <label 
                            htmlFor="rich_description"
                        >
                            Rich Description 
                        </label>

                        <input 
                            type="text" 
                            className="form-control" 
                            id="rich_description" 
                            placeholder="Package Rich Description"  
                            value={this.state.rich_description}
                            onChange = { this.changerich_descriptionHandler }
                        />
                        <div style ={{fontSize:"14px", color:"red"}}>
                            {this.state.rich_descriptionError}
                        </div>
                    </div>

                    <div className="row">
                        <label 
                            htmlFor="create_date"
                        >
                            Create Date 
                        </label>

                        <input 
                            type="text" 
                            className="form-control" 
                            id="create_date" 
                            placeholder="Package Create Date"  
                            value={this.state.create_date}
                            onChange = { this.changecreate_dateHandler }
                        />
                        <div style ={{fontSize:"14px", color:"red"}}>
                            {this.state.create_dateError}
                        </div>
                    </div>

                    <button type="submit"  id = "#">Add Package</button>
                </form>

                {/* <div>
                    <img  src={Image1} id="image"/>
                </div> */}
            </div>
        );  
    }
}
export default AddPackage;

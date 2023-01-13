import React, { Component } from 'react';
import axios from 'axios';
import './packages.css';
//import Image1 from '../../Images/bus_route_image.png'


export default class UpdatePackage extends Component {

    constructor(props) {
        super(props);

        this.onChangename = this.onChangename.bind(this);
        this.onChangecategory = this.onChangecategory.bind(this);
        this.onChangeprice = this.onChangeprice.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangerich_description = this.onChangerich_description.bind(this);
        this.onChangecreate_date = this.onChangecreate_date.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            name: '',
            category:'',
            price:'',
            description:'',
            rich_description:'',
            create_date:'',

        };

    }

    componentDidMount(){
        axios.get('http://localhost:8070/package/get/' + this.props.match.params.id)
            .then(response =>{
                this.setState({

                    name:response.data.package.name,
                    category:response.data.package.category,
                    price:response.data.package.price,
                    description:response.data.package.description,
                    rich_description:response.data.package.rich_description,
                    create_date:response.data.package.create_date,
                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    onChangename(e){
        this.setState({name:e.target.value});
    }
    onChangecategory(e){
        this.setState({category:e.target.value});
    }
    onChangeprice(e){
        this.setState({price:e.target.value});
    }
    onChangedescription(e){
        this.setState({description:e.target.value});
    }
    onChangerich_description(e){
        this.setState({rich_description:e.target.value});
    }
    onChangecreate_date(e){
        this.setState({create_date:e.target.value});
    }


    onSubmit(e){
        e.preventDefault();
        const obj = {
            
            name: this.state.name,
            category: this.state.category,
            price: this.state.price,
            description: this.state.description,
            rich_description: this.state.rich_description,
            create_date: this.state.create_date,
        };

        axios.put("http://localhost:8070/package/update/"+this.props.match.params.id, obj)
        .then(res =>console.log(res.data),
        alert("Updated Successfully"));

        this.props.history.push('/dashboard/allpackages');
    }

    render() {
        return(
            
            <div className="form_package">
                <br></br>
                <br></br>
                <h2 id="headertext">
                    Edit Package Details
                </h2>
             
                <form onSubmit={this.onSubmit} id="form_package">
                
                    <div className="row" required>
                        <label htmlFor="name">Package Name </label>
                        <input type="text" className="form-control" id="name" required
                          value={this.state.name}
                          onChange = {this.onChangename}
                        />
                    </div>

                    {/* <div className="row" required>
                        <label htmlFor="category">Package Category </label>
                        <input type="text" className="form-control" id="category" required
                         value={this.state.category}
                         onChange = {this.onChangecategory}
                        />
                    </div> */}

                    <div className="row">
                        <label htmlFor="category">Package Category </label>
                        <select style ={{height:"1cm"}} 
                            className="form-control" id="category"  
                            value={this.state.category} 
                            onChange = {this.onChangecategory}
                        >
                            <option>Select Category</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            
                        </select>
                        
                    </div>

                    <div className="row" required>
                        <label htmlFor="price">Package Price  </label>
                        <input type="text" className="form-control" id="price"  required 
                            value={this.state.price}
                            onChange = {this.onChangeprice}
                        />
                    </div>


                    <div className="row" required>
                        <label htmlFor="description">Description  </label>
                        <input type="text" className="form-control" id="description" required
                            value={this.state.description}
                            onChange = {this.onChangedescription}
                         
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="rich_description">Rich Description</label>
                        <input type="text" className="form-control" id="rich_description" required
                            value={this.state.rich_description}
                            onChange = { this.onChangerich_description}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="create_date">Created Date</label>
                        <input type="text" className="form-control" id="create_date" required
                            value={this.state.create_date}
                            onChange = { this.onChangecreate_date}
                        />
                    </div>

                    <button type="submit" >Update</button>
                    <br/><br/>
                </form>

                {/* <div>
                    <img src={Image1} id="image1"/>
                </div> */}

            </div>
            
        )
    }
}

import React, {Component} from 'react';
import axios from 'axios';
import Image2 from '../../Images/route.png'
import './packages.css'

export default class allPackageDetails extends Component {

    constructor(props){
        super(props);
        this.state = {packages: [], searchId:''};        
    }

    componentDidMount(){
        axios.get('http://localhost:8070/package/').then(response=>{
            this.setState({packages: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    componentDidUpdate(){
        axios.get('http://localhost:8070/package/').then(response =>{
            this.setState({packages:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    deletePackage=(id)=>{
        axios.delete(`http://localhost:8070/package/delete/${id}`).then((res) =>{
            
            window.confirm("Are you sure to delete ? ");
                
        })
        
    }

    searchPackage(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }

    addPackage(){
        this.props.history.push('/dashboard/addPackage');
    }

    render(){

        let filtername = this.state.packages.filter((
            p)=>{
                return p.name.indexOf(this.state.
                    searchId)!==-1;
            }
        );
      
        return (
            <div>

                <div id="topic_details">
                    <h2>Package Details</h2>
                    <hr id="hr"></hr>
                </div>
                <div>
                    
                    <input 
                        className="form-control" 
                        type = "search" 
                        placeholder="search by name" 
                        name="searchQuery" 
                        style={{width:"8cm", marginLeft:"7.5cm", marginTop:"1cm", borderRadius:"9px"}} 
                        value={this.state.searchId} 
                        onChange={this.searchPackage.bind(this)} 
                    />
                    
                </div>

                <div>
                    <a className="btn btn-warning" id="btn3" href="/dashboard/addPackage">
                        <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Add Package
                    </a>
                </div>
                

                <div id="table1">

                  
                    <table  id="package_table" style={{textAlign:'center'}}>
                        <thead>

                            <tr style={{'textAlign':'left'}}>
                                <span >

                                    <span id="text1">Packages</span>
                                    <div>
                                        <img src={Image2} id="iconimage" style={{marginTop:'-1cm'}}/>
                                    </div>                         

                                </span>
                            </tr>
                            
                            <tr>

                                <th style={{'textAlign':'center'}}>Name</th>
                                <th style={{'textAlign':'center'}}>Category</th>
                                <th style={{'textAlign':'center'}}>Price</th>
                                <th style={{'textAlign':'center'}}>Description</th>
                                <th style={{'textAlign':'center'}}>Rich Description</th>
                                <th style={{'textAlign':'center', width:'3.5cm'}}>Created Date</th>
                                <th style={{'textAlign':'center', width:'5cm'}}>Status</th>
                            
                            </tr>
                        </thead>
                        
                        <tbody>
                            {filtername.map((p, index)=>{
                                return <tr key={index}>
                                        
                                    <td>{p.name}</td>
                                    <td>{p.category}</td>
                                    <td>{p.price}</td>
                                    <td>{p.description}</td>
                                    <td>{p.rich_description}</td>
                                    <td>{p.create_date}</td>

                                    <td>
                                        <a className="btn btn-warning" id="btn1" href={`/dashboard/updatepackage/${p._id}`}>
                                            <i class="fas fa-edit "></i>&nbsp;&nbsp;Edit
                                        </a>
                                
                                        
                                        <a className="btn btn-danger" id="btn2"  onClick={() => this.deletePackage(p._id)}>
                                            <i class="fa fa-trash blackiconcolor" aria-hidden="true"></i>&nbsp;&nbsp;Delete&nbsp;
                                        </a>
                                    </td>


                                </tr>
                            })}
                            
                        </tbody> 

                        

                    </table>
                </div>
            </div>
        );
    }
}

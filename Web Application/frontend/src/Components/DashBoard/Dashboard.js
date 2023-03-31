import React, {Component} from 'react';
import axios from 'axios';
import Image2 from '../../Images/route.png';
import '../../Styles/Dashboard.css'


export default class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {busroutes: []};
    }

    
    componentDidMount(){
        axios.get('http://localhost:8070/busroute/').then(response=>{
            this.setState({busroutes: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }


    

   
    
    render(){
        console.log(this.state.busroutes);
        return (
            <div>

                <div id="topic">
                    <h2>Welcome to Dashboard</h2>
                    <hr id="hr"></hr>
                </div>
                


                {/* Package Button */}
               <div>
                   <button id="dash_btn1">

                        <i class="fas fa-box fa-5x imgcolor1"></i>
                        <a className="btn btn-warning" id="dash_link1" href="#">
                            Packages
                        </a>
                       
                    </button>
               </div>

                {/* Bookings Button */}
               <div>
                   <button id="dash_btn2">
                        
                        <i class="fas fa-route fa-5x imgcolor2"></i>
                        <a className="btn btn-warning" id="dash_link2" href="/dashboard/viewBusroute">
                            Bookings
                        </a>
                       
                    </button>
               </div>

                {/* Customers Button */}
               <div>
                   <button id="dash_btn3">

                        <i class="fas fa-address-card fa-5x imgcolor3"></i>
                
                        <a className="btn btn-warning" id="dash_link3" href="#">
                            Customers
                        </a>
                       
                    </button>
               </div>

               <br></br>
              {/* Package Button */}
              <div>
                   <button id="dash_btn4">

                        <i class="fas fa-solid fa-comments fa-5x imgcolor4"></i>
                        <a className="btn btn-warning" id="dash_link4" href="#">
                            Feedbacks
                        </a>
                       
                    </button>
               </div> 

                
                
            </div>
        );
    }
}
import './App.css';
import React, { useContext } from 'react'
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom"
import { AuthContextProvider } from "./Components/context/AuthContext";

import Dashboard from './Components/DashBoard/Dashboard';
import Sidebar from './Components/SideBar/sidebar';
import Navbar from './Components/Header/navbar';
import ReportDashboard from './Components/Reports/ReportDashboard';
// import AuthContext from './Components/context/AuthContext'
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import AuthContext from './Components/context/AuthContext';
import AddPackage from './Components/ManagePackages/AddPackageDetails';
import allPackageDetails from './Components/ManagePackages/ViewPackageDetails';
import UpdatePackage from './Components/ManagePackages/UpdatePackageDetails';
import AddFeedback from './Components/ManageFeedbacks/AddFeedback';
import allFeedbacks from './Components/ManageFeedbacks/viewFeedback';
import updateFeedback from './Components/ManageFeedbacks/updateFeedback';
import viewFeedbackDetail from './Components/ManageFeedbacks/viewFeedBackDetail';
import AddCustomer from './Components/ManageCustomers/AddCustomers';
import allCustomerDetails from './Components/ManageCustomers/ViewCustomerDetails';
import UpdateCustomer from './Components/ManageCustomers/UpdateCustomerDetails';
import allOrders from './Components/ManageOrders/ViewOrderDetails';
import AddOrder from './Components/ManageOrders/AddOrders';
import UpdateOrder from './Components/ManageOrders/UpdateOrderDetails';


axios.defaults.withCredentials = true;

function App() {

  // const { loggedIn } = useContext(AuthContext);
  return (


    <AuthContextProvider>
      <Router>
        <div>
          <Route path="/dashboard" component={Sidebar}  />
          <Route path="/dashboard" component={Navbar}/>

          <Route path="/dashboard" exact component={Dashboard} />

          <Route path="/dashboard/reportdashboard" exact component={ReportDashboard} />


          <Route exact path="/register"><Register /></Route>
          <Route exact path="/"><Login /></Route>


          <Route path="/dashboard/addpackage" exact component={AddPackage} />
          <Route path="/dashboard/allpackages" exact component={allPackageDetails} />
          <Route path="/dashboard/updatepackage/:id" exact component={UpdatePackage} />

          <Route path="/dashboard/addfeedback" exact component={AddFeedback} />
          <Route path="/dashboard/allfeedbacks" exact component={allFeedbacks} />
          <Route path="/dashboard/updatefeedback/:id" exact component={updateFeedback} />
          <Route path="/dashboard/viewfeedback/:id" exact component={viewFeedbackDetail} />

          <Route path="/dashboard/addcustomer" exact component={AddCustomer} />
          <Route path="/dashboard/allcustomers" exact component={allCustomerDetails} />
          <Route path="/dashboard/updatecustomer/:id" exact component={UpdateCustomer} />

          <Route path="/dashboard/addOrder" exact component={AddOrder} />
          <Route path="/dashboard/allorders" exact component={allOrders} />
          <Route path="/dashboard/updateorder/:id" exact component={UpdateOrder} />
          {/* <Route path="/dashboard/vieworder/:id" exact component={} /> */}


        </div>

      </Router>
    </AuthContextProvider>

  );
}

export default App;

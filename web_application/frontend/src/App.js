import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Dashboard from './components/Dashboard';
import AddPackage from './components/AddPackage';
import Footer from './components/Footer';
import AboutTravelit from './components/AboutTravelit';
import AboutTeam from './components/AboutTeam';
import AboutMain from './components/AboutMain';
import PackageDetails from './components/PackageDetails';
import EditPackage from './components/EditPackage';
import AdminReg from './components/AdminReg';
import UserLogin from './components/UserLogin';
import Cover from './components/Cover';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Routes>
              {/* Display AdminReg component when the root path is matched */}
              <Route path="/" element={<Cover/>} />
              <Route path="/login" element={<UserLogin/>} />
              <Route path="/registration" element={<AdminReg />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/addPackage" element={<AddPackage />} />
              <Route path="/aboutTravelit" element={<AboutTravelit />} />
              <Route path="/aboutTeam" element={<AboutTeam />} />
              <Route path="/aboutMain" element={<AboutMain />} />
              <Route path="/packageDetails" element={<PackageDetails />} />
              <Route path="/editPackage/:id" element={<EditPackage />} />
            </Routes>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

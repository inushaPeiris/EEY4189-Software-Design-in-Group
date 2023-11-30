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
import ViewClients from './components/ViewClients';
import AddClient from  "./components/AddClient";
import ViewFeed from './components/ViewFeed';
import ViewBooking from './components/ViewBooking';
import AddBooking from './components/AddBooking';
import SiteMap from './components/SiteMap';
import BookingDetails from './components/BookingDetails';
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Routes>
              {/* paths for components */}
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
              <Route path="/clients" element={<ViewClients />} />
              <Route path="/addClient" element={<AddClient/>} />
              <Route path="/viewfeed" element={<ViewFeed/>} />
              <Route path="/bookings" element={<ViewBooking/>} />
              <Route path="/booking/:id" element={<BookingDetails/>} />
              <Route path="/addbooking" element={<AddBooking/>} />
              <Route path="/sitemap" element={<SiteMap/>} />
            </Routes>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

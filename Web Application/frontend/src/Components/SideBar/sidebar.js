import React from "react";
import '../../Styles/sidebar.css'
//import Image1 from'../../Images/journey_img1.png'

function sidebar() {

    return (
      <div>
        <div className="nav-side-menu">
          <div className="brand">TravelLanka</div>
          <i
            className="fa fa-bars fa-2x toggle-btn"
            data-toggle="collapse"
            data-target="#menu-content"
          ></i>

          <div className="menu-list">
            <ul id="menu-content" className="menu-content collapse out">
              {/* <div>
                <img src={Image1} id="image1"/>
            </div> */}

              <li>
                <a href="#">
                  <i class="fas fa-umbrella-beach fa-4x iconcolor"></i>
                  <div id="topicname">
                    <span>TravelLanka</span>
                  </div>
                </a>
              </li>

              {/* --------------------------------Dashboard-------------------------------------------------------- */}

              <li>
                <a href="/dashboard">
                  <i className="fa fa-dashboard fa-lg"></i>&nbsp;&nbsp;&nbsp;
                  Dashboard
                </a>
              </li>
              {/* --------Package--------- */}
              <li
                data-toggle="collapse"
                data-target="#packages"
                className="collapsed"
              >
                <a href="#">
                  <i class="fa fa-bus" aria-hidden="true"></i>{" "}
                  &nbsp;&nbsp;&nbsp; Packages <span className="arrow"></span>
                </a>
              </li>
              <ul className="sub-menu collapse" id="packages">
                <li>
                  <a href="/dashboard/addpackage">Add Package</a>
                </li>
                <li>
                  <a href="/dashboard/allpackages">All Packages</a>
                </li>
              </ul>

              {/* --------customer--------- */}
              <li
                data-toggle="collapse"
                data-target="#customers"
                className="collapsed"
              >
                <a href="#">
                  <i class="fa fa-bus" aria-hidden="true"></i>{" "}
                  &nbsp;&nbsp;&nbsp; Customers <span className="arrow"></span>
                </a>
              </li>
              <ul className="sub-menu collapse" id="customers">
                <li>
                  <a href="/dashboard/addcustomer">Add Customer</a>
                </li>
                <li>
                  <a href="/dashboard/allcustomers">All Customers</a>
                </li>
              </ul>

              {/* --------order--------- */}
              <li
                data-toggle="collapse"
                data-target="#orders"
                className="collapsed"
              >
                <a href="#">
                  <i class="fa fa-bus" aria-hidden="true"></i>{" "}
                  &nbsp;&nbsp;&nbsp; Orders <span className="arrow"></span>
                </a>
              </li>
              <ul className="sub-menu collapse" id="orders">
                <li>
                  <a href="/dashboard/addOrder">Add Order</a>
                </li>
                <li>
                  <a href="/dashboard/allorders">All Orders</a>
                </li>
              </ul>

              {/* --------feedbacks--------- */}
              <li
                data-toggle="collapse"
                data-target="#feedbacks"
                className="collapsed"
              >
                <a href="#">
                  <i class="fa fa-bus" aria-hidden="true"></i>{" "}
                  &nbsp;&nbsp;&nbsp; Feedbacks <span className="arrow"></span>
                </a>
              </li>
              <ul className="sub-menu collapse" id="feedbacks">
                <li>
                  <a href="/dashboard/addfeedback">Add Feedback</a>
                </li>
                <li>
                  <a href="/dashboard/allfeedbacks">All feedbacks</a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    );
}
export default sidebar;

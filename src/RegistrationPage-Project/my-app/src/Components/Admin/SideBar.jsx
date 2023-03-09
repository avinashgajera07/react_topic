import React from "react";
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="side-header">
          <h3>
            <span>Logo</span>
          </h3>
        </div>

        <div className="side-content">
          <div className="profile">
            <div className="profile-img bg-img fat1"></div>
            <h4>David Green</h4>
            <small>Art Director</small>
          </div>

          <div className="side-menu">
            <ul className="p0">
              <li>
                <a href="" className="active">
                  <span className="las la-home"></span>
                  <small>Dashboard</small>
                </a>
              </li>
              <li>

              <Link className='nav-link' to="allusers"><span className="las la-user-alt"></span> <small>All Users</small> </Link>
                {/* <a href="">
                  
                  <small>Profile</small>
                </a> */}
              </li>
              <li>
                <a href="">
                  <span className="las la-envelope"></span>
                  <small>Mailbox</small>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="las la-clipboard-list"></span>
                  <small>Projects</small>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="las la-shopping-cart"></span>
                  <small>Orders</small>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="las la-tasks"></span>
                  <small>Tasks</small>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
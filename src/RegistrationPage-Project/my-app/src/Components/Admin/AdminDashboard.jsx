import React, { Component } from "react";
// import Headers from "./../../commonComponent/02headerfile";
import SideBar from "./SideBar.jsx";
import HeaderCompo from "./HeaderComp.jsx";
import "./Admins.css";
import { Outlet } from "react-router-dom";

class Admin extends Component {
  render() {
    return (
      <>
        <div className="">
          <input type="checkbox" id="menu-toggle" />
          <SideBar/>
          
          <div className="main-content">
          <HeaderCompo/>
                <Outlet/>
            <main>
             
            </main>
          </div>
        </div>
      </>
    );
  }
}

export default Admin;
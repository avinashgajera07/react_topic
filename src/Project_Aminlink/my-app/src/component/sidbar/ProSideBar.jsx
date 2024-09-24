import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";

const ProSideBar = ({ collapsed }) => {
  return (
    <div className="sidebar-container">
      <Sidebar
        backgroundColor="#2B476A"
        collapsed={collapsed}
        transitionDuration={1000}
        collapsedWidth="80px"
        className="sidebar-content"
      >
        <Menu
          className="py-2"
          menuItemStyles={{
            button: {
              color: "#ffffff",
              ":hover": {
                backgroundColor: "#d3d3d330",
              },
            },
            subMenuContent: {
              backgroundColor: "#0b2948db",
              color: "#ffffff",
            },
          }}
          transitionDuration={1000}
          closeOnClick
        >
          <div>
            <img className="logo p-2 mx-3" src="company_logo.jpg" alt="Logo" />
          </div>

          <NavLink to="/">
            <MenuItem icon={<i className="fa-solid fa-table-columns"></i>}>
              Dashboard
            </MenuItem>
          </NavLink>
          <NavLink to="/">
            <MenuItem icon={<i className="fa-solid fa-calendar-days"></i>}>
              Timesheets
            </MenuItem>
          </NavLink>
          <NavLink to="">
            <MenuItem icon={<i className="fa-solid fa-file"></i>}>
              Project Overview
            </MenuItem>
          </NavLink>
          <SubMenu
            active
            label="Admin"
            icon={<i className="fa-solid fa-user-tie"></i>}
          >
            <NavLink to="">
              <MenuItem>Customer</MenuItem>
            </NavLink>
            <NavLink to="/projectpage">
              <MenuItem>Projects</MenuItem>
            </NavLink>
            <NavLink to="/employeespage">
              <MenuItem>Employees</MenuItem>
            </NavLink>
            <NavLink to="">
              <MenuItem>Working Schemes</MenuItem>
            </NavLink>
            <NavLink to="">
              <MenuItem>Public holiday</MenuItem>
            </NavLink>
            <NavLink to="">
              <MenuItem>Workload Schemes</MenuItem>
            </NavLink>
          </SubMenu>
        </Menu>
      </Sidebar>
      <div className="sidebar-footer">
        <div className="">
          <img src="userImage.jpg" alt="User" />
        </div>
        <span className="" style={{ marginLeft: "-70px" }}>
          Anna Burton
        </span>
        <i class="fa-solid fa-right-from-bracket"></i>
      </div>
    </div>
  );
};

export default ProSideBar;

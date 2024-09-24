import React from "react";
import SidebarPage from "../layout/siderbar";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <SidebarPage />
      <div>{children}</div>
    </div>
  );
};

export default Layout;

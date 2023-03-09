import React from "react";

const HeaderComp = () => {
  return (
    <>
      <header>
        <div className="header-content">
          <label htmlFor="menu-toggle">
            <span className="las la-bars"></span>
          </label>

          <div className="header-menu">
            <label>
              <span className="las la-search"></span>
            </label>

            <div className="notify-icon">
              <span className="las la-envelope"></span>
              <span className="notify">4</span>
            </div>

            <div className="notify-icon">
              <span className="las la-bell"></span>
              <span className="notify">3</span>
            </div>

            <div className="user">
              <div className="bg-img fat2"></div>

              <span className="las la-power-off"></span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComp;
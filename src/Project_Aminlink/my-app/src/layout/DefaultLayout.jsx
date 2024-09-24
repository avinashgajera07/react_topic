// import React, { useState } from 'react';
import ProSideBar from '../component/sidbar/ProSideBar.jsx';
// import NavBar from '../wrapper/Navbar/NavBar.jsx';
import { Outlet } from 'react-router';

const DefaultLayout = () => {

    // const [collapsed, setCollapsed] = useState(false);

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <ProSideBar  />
            <div className="flex-grow-1 d-flex flex-column ">
                {/* <NavBar setCollapsed={setCollapsed} collapsed={collapsed} /> */}
                <main className="p-4  px-lg-4" style={{width:'100%',height:"92vh"}} >
                    <div className="">
                        <Outlet/>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DefaultLayout;
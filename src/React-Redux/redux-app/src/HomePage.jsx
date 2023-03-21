import React, { useLayoutEffect } from 'react';
import HeaderFile from './commonComponent/02headerfile';
import { useDispatch } from 'react-redux/es/exports';
import { retierveUsers } from "./actions/users"
const HomePage = () => {
    const dispatch =useDispatch()
    useLayoutEffect(()=>{
        console.log("useLayoutEffect");
        getUsers()
    })
    async function getUsers(){
        let respo = await dispatch(retierveUsers())
    }
    return (
        <div>
            <HeaderFile/>
            HomePage
        </div>
    );
};

export default HomePage;
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Edutuser = () => {
  let { userId } = useParams();
  const [user, setUser] = useState([]);
  console.log(userId);
  const fetchData = async() => {
    await fetch("https://justjayapi.000webhostapp.com/userdatabyidgetmethod?id="+userId)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data["Data"][0]);
        setUser(data["Data"][0]);
        // decimal_mark(data.results[0].annotations.currency.alternate_symbols)
        // components(data.results[2].components)
        // stay_informed(data.stay_informed)
      });
  };
  const updateUser = async() => {
    console.log("updateUser");
    await  fetch(`http://localhost/API/updateuser?id=${user.id}`,{
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((res)=>res.json()).then((response)=>{
      console.log(response);
      
  })
  };
  useEffect(() => {
    fetchData();
  }, [])
  return <div> <main>
  <div className="page-header">
    <h1>All Users</h1>
    <small>Home / Dashboard</small>
  </div>

  <div className="page-content">

    <div className="records table-responsive">
      <div className="record-header">
        <div className="add">
          <span>Entries</span>
          <select name="" id="">
            <option value="">ID</option>
          </select>
          <button>Add record</button>
        </div>

        <div className="browse">
          <input
            type="search"
            placeholder="Search"
            className="record-search"
          />
          <select name="" id="">
            <option value="">Status</option>
          </select>
        </div>
      </div>

      <div>
        {/* <input type="text" onClick={updateUser} onChange={(event)=>{ setUser((koibhi) => ({ formData: {  ...koibhi.formData,  [event.target.name]: event.target.value } }))  }} value={user.username} name="username" id="username" /> */}
        
        <input type="text" onChange={(event)=>{ setUser((koibhi) => ({   ...koibhi,  [event.target.name]: event.target.value } ))  }} value={user.username} name="username" id="username" />
        
        <button type="button" onClick={updateUser}  className="btn btn-secondary">Update</button>
      {/* {JSON.stringify(user)} 
      {JSON.stringify(user.username)}  */}
      </div>
    </div>
  </div>
</main></div>;
};

export default Edutuser;
import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios'

function Create() {
  const [inputData, setInputData] =useState({
    id :'',
    name:'',
    email:''
  })
const navigate = useNavigate();

  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:3000/users',inputData)
    .then(res =>{
      navigate('/')
    })
    if(inputData!== ""){
      alert("data not submited")
    }else{
      alert("Data posts successfully!")

    }
  }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondery text-white p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type='text' name='name' className='form-control' placeholder="Name"
            onChange={e => setInputData({...inputData,name: e.target.value})}/>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" className='form-control' placeholder="Email"
             onChange={e => setInputData({...inputData,email: e.target.value})}/>
          </div><br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;

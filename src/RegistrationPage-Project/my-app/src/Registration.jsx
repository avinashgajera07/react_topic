
import React from 'react';
import './login.css';
import CustomHook from './Hooks/CustomHook'
import { Link, useNavigate } from 'react-router-dom';
// https://api.opencagedata.com/geocode/v1/json?q=Ahmedabad&key=faed4d9eb29d483a866000c901ccb680
const Login = () => {
    const navigate = useNavigate();

    const { handleChange, inp, errors } = CustomHook({}, { usernameError: "", passwordError: "" })
    const saveFormData=()=>{
        console.log("called",inp); 
        fetch("http://localhost/API/registration",{
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(inp),
          }).then((res)=>res.json()).then((response)=>{
            console.log(response);
            if (response.Code == 1) {
                navigate("/login")
            } else{
                alert("Error while inserting try after sometime")
            }
        })
    }
    return (
        <div className="login-box">
        <div className="container">
            <div className="form-box">
                <div className="header-form">
                    <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
                    <div className="image">
                    </div>
                </div>
                <div className="body-form">
                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                            </div>
                            <input type="text" onChange={handleChange} name="username" className="form-control" placeholder="Username" />
                            {errors.usernameError}
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-lock"></i></span>
                            </div>
                            <input type="text" onChange={handleChange} name="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                            </div>
                            <input type="text" onChange={handleChange} name="email" className="form-control" placeholder="Enter Ur Email" />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-phone"></i></span>
                            </div>
                            <input type="text" onChange={handleChange} name="mobile" className="form-control" placeholder="Enter Mobile" />
                        </div>
                        <button type="button" onClick={saveFormData} className="btn btn-secondary btn-block">Register</button>

                        <div className="">
                            <div className='text-center'><Link className='txt-w' to="/">Home</Link></div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
        </div>

    );
};

export default Login;
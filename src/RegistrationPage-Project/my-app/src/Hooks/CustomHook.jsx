import React from 'react';
import { useState } from 'react';

const CustomHook = (intVal,initError) => {
    const [inp,setInput] = useState(intVal)
    const [errors,setError] = useState(initError)
    const handleChange = (e)=>{
        // console.log("called");
        // setInput((inp)=>({[e.target.name]:e.target.value}))
        setInput((inp)=>({...inp,[e.target.name]:e.target.value}))
        console.log("called from Hook"); 
        if (e.target.name == "username") {
            if (e.target.value == "") {
                setError({...errors,"usernameError":"User Name is required"})
            } else {
                setError({...errors,"usernameError":""})
            } 
        }else if(e.target.name == "email") {
            let Pattern = /^[a-zA-Z0-9]+$/
            if (Pattern.test(e.target.value)) {
                setError({...errors,"emailError":"User Name is required"})
            } else {
                setError({...errors,"emailError":""})
            } 
        }
    }
    return {
        inp,
        handleChange,
        errors
    };
};

export default CustomHook;
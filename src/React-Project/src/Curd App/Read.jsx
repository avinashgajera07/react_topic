import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { axios } from 'axios';
import {  useParams } from 'react-router'
import { Link } from 'react-router-dom';

function Read() {
    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:3000/users/'+id)
        .then(res => setData(res.data))
        .catch(err =>console.log(err))
    },[])

  return (
    <div className='container'> 
            <div className='container p-5'>
                <p>{data.id}</p>
                <p>{data.name}</p>
                <p>{data.email}</p>
                <Link to="/">Back</Link>
            </div>
    </div>
  )
}

export default Read
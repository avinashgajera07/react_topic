import React, { useState } from 'react'
import './TaskCss.css'

const Task1 = () => {

  const [username, setUserName] = useState('')

  const [firstname, setFirstName] = useState('')

  const [lastname, setLastName] = useState('')

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [dob, setDOB] = useState('')

  const [image, setImage] = useState(null)

  const [errorMsg, setErrorMsg] = useState('')

  const [data, setData] = useState('')

  const [allData, setAllData] = useState([])

  
  const handleSubmit = (e) => {
      e.preventDefault();

      if (!/^[a-zA-Z]+$/.test(username)) {
          setErrorMsg('User can only use characters')
          return;
      }
      if (!/^[a-zA-Z]+$/.test(username) || !/^[a-zA-Z]+$/.test(lastname)) {
          setErrorMsg("FirstName and LastName only use characters")
          return;
      }
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
          setErrorMsg("Please enter valid email")
      }
      if (password.toLowerCase().includes(username.toLowerCase())) {
          setErrorMsg('Password and user name can not be same')
      }
  }

  const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
          setImage(URL.createObjectURL(event.target.files[0]));
      }
  }  

  const handlePrint = (x) => {
      setData(`\u00A0\u00A0\u00A0\u00A0 UserName: ${username}
      \u00A0\u00A0\u00A0\u00A0 FullName: ${firstname + lastname}
      \u00A0\u00A0\u00A0\u00A0 Email: ${email}
      \u00A0\u00A0\u00A0\u00A0 Password : ${password}
      \u00A0\u00A0\u00A0\u00A0 Date-Of-Birth: ${dob}
      `)
      
  }

  const addData =()=>{
      setUserName('')
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      setDOB('')
  }



  return (
      <>
         
          <hr />
          <form className='form' onSubmit={handleSubmit}>
              <div className="container clr">

                  <label htmlFor="username">Username:</label>&nbsp;
                  <input className='mt-2' type="text" name="username" value={username} autoFocus id="username" onChange={(e) => setUserName(e.target.value)} /><br />

                  <label htmlFor="first-name">First Name:</label>&nbsp;
                  <input className='mt-2' type="text" name="firstname" value={firstname} id="first-name" onChange={(e) => setFirstName(e.target.value)} /><br />

                  <label htmlFor="last-name">Last Name:</label>&nbsp;
                  <input className='mt-2' type="text" name="lastname" value={lastname} id="last-name" onChange={(e) => setLastName(e.target.value)} /><br />

                  <label htmlFor="email">Email:</label>&nbsp;
                  <input className='ml-4 mt-2' type="email" name="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} /><br />

                  <label htmlFor="first-name">Password:</label>&nbsp;
                  <input className='mt-2' type="password" name="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} /><br />

                  <label htmlFor="dob">Date Of Birth:</label>&nbsp;
                  <input className='mt-2 mr-4 ' type="date" name="date" value={dob} id="date" onChange={(e) => setDOB(e.target.value)} /><br /><br />

                  <input type="file" onChange={onImageChange} className="filetype " />

                  <button className='btn btn-success mt-5' onClick={handlePrint}>Register</button>
                  <button className='btn btn-warning mt-5 ml-2' onClick={addData}>EditAllData</button>

                  <div style={{ color: 'red' }} className="error mt-5">{errorMsg}</div>

                  <h3 className='mt-3'> User Information here</h3>
                  <br />
                  <p>{data}
                      <img src={image}  style={{width:'100px',height:'100px'}} /> 
                  </p>

              </div>
          </form>
      </>
  )
}


export default Task1

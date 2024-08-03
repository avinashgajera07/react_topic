import React, { useState } from "react";
import axios from "axios";
// import "./Registration.css";

const Registration = () => {
  const [personName, setPersonName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("personName", personName);
    formData.append("email", email);
    formData.append("username", username);
    formData.append("contactInfo", contactInfo);
    formData.append("profilePicture", profilePicture);

    try {
      await axios.post("http://localhost:3000/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("User registered successfully");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Person Name"
          value={personName}
          onChange={(e) => setPersonName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Contact Info"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setProfilePicture(e.target.files[0])}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;

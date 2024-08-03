import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./UpdateUser.css";

const UpdateUser = ({ match }) => {
  const [user, setUser] = useState(null);
  const [personName, setPersonName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/${match.params.id}`
        );
        const userData = response.data;
        setUser(userData);
        setPersonName(userData.personName);
        setEmail(userData.email);
        setUsername(userData.username);
        setContactInfo(userData.contactInfo);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, [match.params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("personName", personName);
    formData.append("email", email);
    formData.append("username", username);
    formData.append("contactInfo", contactInfo);
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    try {
      await axios.put(
        `http://localhost:3000/users/${match.params.id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("User updated successfully");
    } catch (err) {
      console.error(err);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Update User</h2>
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
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;

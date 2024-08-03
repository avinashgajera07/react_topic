import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./DeleteUser.css";

const DeleteUser = ({ match }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/${match.params.id}`
        );
        setUser(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, [match.params.id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/users/${match.params.id}`);
      alert("User deleted successfully");
    } catch (err) {
      console.error(err);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Delete User</h2>
      <div>
        <p>Are you sure you want to delete {user.personName}?</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteUser;

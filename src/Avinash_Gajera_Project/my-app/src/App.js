import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./MainCompo/Registration";
import ViewUsers from "./MainCompo/ViewUsers";
import UpdateUser from "./MainCompo/UpdateUser";
import DeleteUser from "./MainCompo/DeleteUser";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/users" element={<ViewUsers />} />
        <Route path="/update/:id" element={<UpdateUser />} />
        <Route path="/delete/:id" element={<DeleteUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

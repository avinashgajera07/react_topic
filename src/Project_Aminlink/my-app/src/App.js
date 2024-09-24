// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import Home from "./components/Home";
import ProjectPage from "./components/ProjectPage";
import EmployeesPage from "./components/EmployeesPage";
import DefaultLayout from "./layout/DefaultLayout.jsx";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projectpage" element={<ProjectPage />}></Route>
          <Route path="/employeespage" element={<EmployeesPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

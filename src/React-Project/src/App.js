import "./App.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./Curd App/Home.jsx";
import Create from "./Curd App/Create.jsx";
import Update from "./Curd App/Update.jsx";
import Read from "./Curd App/Read.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Create" element={<Create />}></Route>
        <Route path="/Update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

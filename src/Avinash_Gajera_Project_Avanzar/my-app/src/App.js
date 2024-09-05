import "./App.css";
import Registration from "./Components/RegistrationPage.jsx";
import LoginPage from "./Components/LoginPage.jsx";
import HomePage from "./Components/HomePage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePage from "./Components/CreatePage.jsx";
import Updatepage from "./Components/Updatepage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />}></Route>
        <Route path="/loginpage" element={<LoginPage />}></Route>
        <Route path="/homepage" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route path="/update/:id" element={<Updatepage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

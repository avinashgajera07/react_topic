import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Loginpage from "./component/pages/Loginpage";
// import RegisterPage from "./component/pages/RegisterPage";
// import HomePage from "./component/pages/HomePage";
import TodoPage from "./component/pages/TodoPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} /> */}
        <Route path="/" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

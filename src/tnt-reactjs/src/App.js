import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserHomepage from "./components/UserHomepage.jsx";
import UserCreate from "./components/user-management/UserCreate.jsx";
import UserEdit from "./components/UserEdit.jsx";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<UserHomepage />}></Route>
        <Route path="/usercreate" element={<UserCreate />}></Route>
        <Route path="/useredit/:id" element={<UserEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
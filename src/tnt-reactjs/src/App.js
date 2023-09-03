import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserCreate from "./components/user-management/UserCreate.jsx";
import UserEdit from "./components/user-management/UserEdit.jsx";
import UserHomepage from "./components/user-management/UserHomepage.jsx";




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
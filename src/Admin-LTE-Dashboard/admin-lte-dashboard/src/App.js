import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;

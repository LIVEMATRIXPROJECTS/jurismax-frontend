import "./App.css";
// import Footer from "./Components/Footer/Footer";
// import Header from "./Components/Header/Header";
// import Work from "./Components/Header/Work";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { Routes, Route } from "react-router-dom";
import Report from "./Pages/Report/Report";
// import Protected from "./Pages/Protected/Protected";
import LegalPage from "./Pages/LegalPage/LegalPage";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Payment from "./Components/Payments/Payment";
import File from "./Components/Files/Files";
// import { AuthProvider } from "./Components/Auth/Auth";

function App() {
  let login = true;
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        {login && <Route exact path="/report" element={<Report />} />}

        <Route path="/legalpage" element={<LegalPage />} />
        <Route path="/payment" element={<Payment/>}/>
        <Route path="File" element={<File/>}/>
      </Routes>
     
    </div>
  );
}

export default App;

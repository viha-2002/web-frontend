import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login.jsx";
import SignUpPage from "./pages/signup.jsx";
import HomePage from "./pages/home.jsx";
import Header from "./components/header.jsx";
import AdminPage from "./pages/adminPAge.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        {/* <Header/> */}
        <Routes path="/*">
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/admin/*" element={<AdminPage/>}/>
          <Route path="/*" element={<h1>404 Not Found!</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import HomePage from "./pages/home.jsx";
import Header from "./components/header.jsx";
import AdminPage from "./pages/adminPAge.jsx";
import TestPage from "./pages/testPage.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Toaster position="top-center" />
        {/* <Header/> */}
        <Routes path="/*">
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/*" element={<h1>404 Not Found!</h1>} />
          <Route path="/testing" element={<TestPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    // console.log(email);
    // console.log(password);

    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/users/login",
        {
          email: email,
          password: password,
        }
      );
      toast.success("Login successful!");
      console.log(response.data);
      localStorage.setItem("token", response.data.token);

      if (response.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }

    } catch (e) {
      // console.log(e.response.data.message );
      if (e.response && e.response.data && e.response.data.message) {
        toast.error(e.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again.");
        console.error(e);
      }
    }
  }

  return (
    <div className="w-full h-screen bg-[url('/login.jpg')] bg-center bg-cover flex items-center justify-evenly">
      <div className="w-[50%] h-full"></div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="w-[500px] h-[600px] backdrop-blur-md rounded-[20px] shadow-xl flex flex-col justify-center items-center">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email "
            className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] my-[10px]"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] my-[20px]"
            type="password"
          />
          <button
            onClick={handleLogin}
            className="w-[300px] h-[50px] cursor-pointer  bg-[#c3efe9] rounded-[20px] text-[20px] font-bold text-white my-[20px] mb-[20px]"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

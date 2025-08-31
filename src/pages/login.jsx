import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    // console.log(email);
    // console.log(password);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email: email,
          password: password,
        }
      );
      toast.success("Login successful!")
      console.log(response.data)
    } catch (e) {
      // console.log(e.response.data.message );
      toast.error(e.response.data.message)
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

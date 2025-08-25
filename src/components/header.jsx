import UserData from "./userData.jsx"
import { Link } from "react-router-dom"
 
export default function Header(){
    console.log("Header component loading...")
    return(
        <div className="bg-yellow-500">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <a href="https://www.google.com"></a>
        </div>
    )
}
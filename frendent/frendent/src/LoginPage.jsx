import axios from "axios";
import { useState } from "react";
import "./Header.css";

function LoginPage() {

  const [isRegister,setIsRegister] = useState(false);

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [phone,setPhone] = useState("");

  // LOGIN
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password
      });

      alert(res.data.message);

      localStorage.setItem("user", JSON.stringify(res.data.user));
      window.location.reload();

    } catch (err) {
      alert(err.response?.data?.message || "Login failed ❌");
    }
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
        phone
      });

      alert(res.data.message);
      setIsRegister(false);

    } catch (err) {
      alert(err.response?.data?.message || "Register failed ❌");
    }
  };

  return(
    <div className="login-container">
      <div className="login-box">

        <h2>{isRegister ? "Create Account" : "Login"}</h2>

        {isRegister && (
          <>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e)=>setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Phone Number"
              onChange={(e)=>setPhone(e.target.value)}
            />
          </>
        )}

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={isRegister ? handleRegister : handleLogin}>
          {isRegister ? "Register" : "Login"}
        </button>

        <p
          style={{marginTop:"10px",cursor:"pointer",color:"blue"}}
          onClick={()=>setIsRegister(!isRegister)}
        >
          {isRegister ? "Already have account? Login" : "Create New Account"}
        </p>

      </div>
    </div>
  );
}

export default LoginPage;
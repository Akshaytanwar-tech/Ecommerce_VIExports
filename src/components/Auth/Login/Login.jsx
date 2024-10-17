import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../../Apis/auth";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic for handling login can go here

    signin(username, password).then((res) => {
      if (res.message == "Login successful") {
        localStorage.setItem("token", res.token);
        navigate("/");
      }
    });
  };

  return (
    <div className="login-page-container">
      <h2 className="login-page-title">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="login-form-group">
          <label htmlFor="login-username" className="login-label">
            Username:
          </label>
          <input
            type="text"
            id="login-username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="login-password" className="login-label">
            Password:
          </label>
          <input
            type="password"
            id="login-password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-submit-btn">
          Login
        </button>
      </form>
      <div className="signin-notsignup">
        Not Signup yet? <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
};

export default Login;

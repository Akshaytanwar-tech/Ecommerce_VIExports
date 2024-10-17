import React, { useState } from "react";
import "./signup.css"; // Import the CSS file for styles
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../../Apis/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Logic for handling signup can go here

    signup(username, password).then((res) => {
      if (res.message == "User registered successfully!") {
        console.log(res.token);
        localStorage.setItem("token", res.token);
        navigate("/");
      }
    });
  };

  return (
    <div className="signup-page-container">
      <h2 className="signup-page-title">Sign Up</h2>
      <form onSubmit={handleSignup} className="signup-form">
        <div className="signup-form-group">
          <label htmlFor="signup-username" className="signup-label">
            Username:
          </label>
          <input
            type="text"
            id="signup-username"
            className="signup-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="signup-form-group">
          <label htmlFor="signup-password" className="signup-label">
            Password:
          </label>
          <input
            type="password"
            id="signup-password"
            className="signup-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-submit-btn">
          Sign Up
        </button>
      </form>
      <div className="signup-already">
        Already Signup? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Signup;

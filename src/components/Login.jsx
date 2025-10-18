import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../assets/bc-logo.png";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  // Email validation
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setEmailError("");
    navigate("/home");
  };

  // Google redirect
  const handleGoogleLogin = () => {
    window.location.href = "https://accounts.google.com/signin";
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <img src={logo} alt="Logo" className="login-logo" />

        <p className="login-para-head"><b>Welcome Back!</b></p>
        <p className="login-para">Hey there! Let's get started 😉</p>

        <form onSubmit={handleLogin} className="login-form">
          {/* Email */}
          <label>Email</label>
          <div className="input-wrapper">
            <i className="fa-solid fa-user input-icon"></i>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {email && (
              <button
                type="button"
                className="clear-btn"
                onClick={() => setEmail("")}
              >
                ×
              </button>
            )}
          </div>
          {emailError && <span className="error-msg">{emailError}</span>}

          {/* Password */}
          <label>Password</label>
          <div className="input-wrapper">
            <i className="fa-solid fa-key input-icon"></i>
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {password && (
              <button
                type="button"
                className="clear-btn"
                onClick={() => setPassword("")}
              >
                ×
              </button>
            )}
          </div>

          {/* Login button */}
          <button type="submit" className="login-btn">
            <i className="fa-solid fa-lock"></i>
            <span>Login</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>or</span>
        </div>

        {/* Google button */}
        <button className="google-btn" onClick={handleGoogleLogin}>
          <i className="fa-brands fa-google"></i>
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./Css/Login.css";

const Login = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
  });

  const login = async () => {
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };

  const signUp = async () => {
    console.log("signUp", formData);
    let responseData;
    await fetch("http://localhost:4000/signUp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>{state}</h1>
        <div className="login-field">
          {state === "Sign Up" ? (
            <input
              name="userName"
              value={formData.userName}
              onChange={changeHandler}
              type="text"
              placeholder="Your name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Your email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Your password"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signUp();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="login-login">
            Already have an account? {""}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login
            </span>
          </p>
        ) : (
          <p className="login-login">
            Create an account? {""}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        )}
        <div className="login-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use and privacy</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

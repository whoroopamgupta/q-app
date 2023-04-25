import React from "react";
import "../Styles/Login.css";

function Login() {
  return (
    <div className="div">
      <form className="form">
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Login;

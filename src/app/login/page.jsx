import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_socialbutton">Sign in with Google</div>
        <div className="login_socialbutton">Sign in with Facebook</div>
        <div className="login_socialbutton">Sign in with Github</div>
      </div>
    </div>
  );
};

export default LoginPage;

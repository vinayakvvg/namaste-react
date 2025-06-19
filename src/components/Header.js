import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginValue, setLoginValue] = useState("Login");

  const loginBtnClicked = () => {
    const newValue = loginValue == "Login" ? "Logout" : "Login";
    setLoginValue(newValue);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img alt="res-logo" className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact Ud</li>
          <li>Cart</li>
          <button className="login-btn" onClick={loginBtnClicked}>
            {loginValue}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

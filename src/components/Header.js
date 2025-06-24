import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Header = () => {
  const [loginValue, setLoginValue] = useState("Login");
  const onlineStatus = useOnlineStatus();

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
          <li>Online Status {onlineStatus ? `💚` : `❤️`} </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
          <button className="login-btn" onClick={loginBtnClicked}>
            {loginValue}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

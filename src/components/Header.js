import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/contexts/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginValue, setLoginValue] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const loginBtnClicked = () => {
    const newValue = loginValue == "Login" ? "Logout" : "Login";
    setLoginValue(newValue);
  };

  const { user_name } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-50 shadow-md">
      <div className="w-64">
        <img alt="res-logo" className="logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status {onlineStatus ? `💚` : `❤️`} </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart - {cartItems?.length} items</Link>
          </li>
          <button className="login-btn" onClick={loginBtnClicked}>
            {user_name}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

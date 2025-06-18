import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;

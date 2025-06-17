import ReactDOM from "react-dom/client";
import { resList } from "./resMockData";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          alt="res-logo"
          className="logo"
          src="https://dummyjson.com/icon/abc123/150"
        />
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

const RestaurantCard = ({ resData }) => {
  const { cuisines, avgRating, name, sla, cloudinaryImageId, costForTwo } =
    resData?.info;
  return (
    <div className="res-card">
      <h3>{name}</h3>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h5 className="cusine">{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{sla.deliveryTime}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((res, i) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <h1>
      <Header />
      <Body />
    </h1>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

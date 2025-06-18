import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cuisines, avgRating, name, sla, cloudinaryImageId, costForTwo } =
    resData?.info;
  return (
    <div className="res-card">
      <h3>{name}</h3>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h5 className="cusine">{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{sla.deliveryTime}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;

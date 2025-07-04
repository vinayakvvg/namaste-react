import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cuisines, avgRating, name, sla, cloudinaryImageId, costForTwo } =
    resData?.info;
  return (
    <div className="p-4 m-4 w-[250px] bg-gray-100 rounded-lg hover:border border-solid border-black hover:bg-gray-200">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="py-2 font-bold text-lg">{name}</h3>
      <h5 className="cusine">{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{sla.deliveryTime}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <div className="absolute bg-black text-white m-4 px-2 rounded-lg">Promoted</div>
        <RestaurantCard resData={props.resData} />
      </div>
    );
  };
};

export default RestaurantCard;

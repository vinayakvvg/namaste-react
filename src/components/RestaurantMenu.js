import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaturantMenu from "../utils/hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaturantMenu(resId);

  if (resMenu.length === 0) return <Shimmer />;

  const { text: resName } = resMenu?.cards[0]?.card?.card;
  const menuItems =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1, 3);

  return (
    <div>
      <h1 className="font-bold text-xl m-4">{resName}</h1>
      {menuItems.map((heading) => {
        return (
          <div key={heading?.card?.card?.categoryId} className="m-4 p-4 bg-gray-100">
            <div className="m-2 p-2 bg-orange-200 text-gray-600">{heading?.card?.card.title}</div>
            {heading?.card?.card?.itemCards?.map((item) => {
              const resInfo = item?.card?.info;
              return (
                <div key={resInfo.id} className="m-4 justify-evenly ">
                  {resInfo.name} - Rs{" "}
                  {(resInfo.defaultPrice ?? resInfo.price) / 100}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;

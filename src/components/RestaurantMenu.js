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
      <h1>{resName}</h1>
      {menuItems.map((heading) => {
        return (
          <div key={heading?.card?.card?.categoryId}>
            <div>{heading?.card?.card.title}</div>
            {heading?.card?.card?.itemCards?.map((item) => {
              const resInfo = item?.card?.info;
              return (
                <div key={resInfo.id}>
                  {resInfo.name} - Rs{" "}
                  {(resInfo.defaultPrice ?? resInfo.price) / 100}
                </div>
              );
            })}
            <div>--- Empty row ---</div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CORS_PROXY, SWIGGY_RES_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(CORS_PROXY + SWIGGY_RES_API + resId, {
      headers: {
        "x-cors-api-key": "temp_6c0c947224315c18cef7fb4d6595b810",
      },
    });
    const jsonData = await data.json();

    setResMenu(jsonData?.data);
  };

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

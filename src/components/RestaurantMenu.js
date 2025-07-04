import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaturantMenu from "../utils/hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showAccordion, setShowAccordion] = useState(-1);

  const resMenu = useRestaturantMenu(resId);
  const resType =
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

  if (resMenu.length === 0) return <Shimmer />;

  const { text: resName } = resMenu?.cards[0]?.card?.card;

  const menuItems =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c?.card?.card?.["@type"] === resType
    );

  const openCatgory = (index) => {
    let toggle = showAccordion == index ? -1 : index;
    setShowAccordion(toggle);
  };

  return (
    <div>
      <h1 className="flex font-bold text-xl my-4 mx-auto w-6/12">{resName}</h1>
      {menuItems.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            categoryData={category}
            showItems={index == showAccordion}
            index={index}
            openCatgory={openCatgory}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;

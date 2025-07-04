import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({
  categoryData,
  showItems,
  index,
  openCatgory,
}) => {
  const toggleAccordion = () => {
    openCatgory(index);
  };

  return (
    <div>
      <div className="bg-gray-100 mx-auto my-2 p-4 w-6/12 rounded-md cursor-pointer shadow-md">
        <div className="flex justify-between" onClick={toggleAccordion}>
          <div className="font-bold text-lg">
            {categoryData?.card?.card.title} (
            {categoryData?.card?.card?.itemCards?.length})
          </div>
          <div>⬇️</div>
        </div>

        {showItems && (
          <ItemsList itemData={categoryData?.card?.card?.itemCards} />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;

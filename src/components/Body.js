import { useState } from "react";
import { resList } from "../utils/resMockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);

  const filterRestaurants = () => {
    console.log("filterRestaurants clicked");
    const newList = listOfRes.filter((res) => res.info.avgRating > 4.3);
    console.log(newList);
    setListOfRes(newList);
  };

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <input
          type="button"
          className="filter-btn"
          value="Top Rated Restaurants"
          onClick={(e) => filterRestaurants(e)}
        />
      </div>
      <div className="res-container">
        {listOfRes.map((res, i) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;

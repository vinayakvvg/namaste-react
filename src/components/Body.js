import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { SWIGGY_API } from "../utils/constants";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const searchBtnClicked = () => {
    let filteredList = listOfRes.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText)
    );
    setFilteredRestaurant(filteredList);
  };

  const fetchRestaurantData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();

    const listOfRes =
      json?.data?.cards?.[4].card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRes(listOfRes);
    setFilteredRestaurant(listOfRes);
  };

  const filterRestaurants = () => {
    const filteredList = listOfRes.filter((res) => res?.info?.avgRating > 4.3);
    setFilteredRestaurant(filteredList);
  };

  if (filteredRestaurant.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={searchBtnClicked}>Search</button>
      </div>
      <div className="filter">
        <input
          type="button"
          className="filter-btn"
          value="Top Rated Restaurants"
          onClick={(e) => filterRestaurants(e)}
        />
      </div>
      <div className="res-container">
        {filteredRestaurant.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;

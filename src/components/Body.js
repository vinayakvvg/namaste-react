import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { CORS_PROXY, SWIGGY_API } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

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
    const data = await fetch(CORS_PROXY + SWIGGY_API, {
      headers: {
        "x-cors-api-key": "temp_6c0c947224315c18cef7fb4d6595b810",
      },
    });
    const json = await data.json();

    const listOfRes =
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRes(listOfRes);
    setFilteredRestaurant(listOfRes);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>Looks like you're offline! Please check your internet connection</h1>
    );
  }

  const filterRestaurants = () => {
    const filteredList = listOfRes.filter((res) => res?.info?.avgRating > 4.3);
    setFilteredRestaurant(filteredList);
  };

  if (filteredRestaurant?.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="flex">
        <div className="p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={searchBtnClicked}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <input
            type="button"
            className="px-4 py-2 bg-gray-200 rounded-lg cursor-pointer"
            value="Top Rated Restaurants"
            onClick={(e) => filterRestaurants(e)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((res) => (
          <Link key={res.info.id} to={"/resMenu/" + res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

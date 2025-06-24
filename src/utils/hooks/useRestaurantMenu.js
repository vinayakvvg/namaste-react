import { useEffect, useState } from "react";
import { CORS_PROXY, SWIGGY_RES_API } from "../constants";

export const useRestaturantMenu = (resId) => {
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const data = await fetch(CORS_PROXY + SWIGGY_RES_API + resId, {
      headers: {
        "x-cors-api-key": "temp_6c0c947224315c18cef7fb4d6595b810",
      },
    });
    const jsonData = await data.json();

    setResMenu(jsonData?.data);
  };

  return resMenu;
};

export default useRestaturantMenu;

import { MENU_API_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const result = await fetch(MENU_API_URL + resId);
    const jsonData = await result.json();
    setResInfo(jsonData.data);
  };
  return resInfo;
};

export default useRestaurantMenu;

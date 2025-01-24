import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer";
import MenuList from "./MenuList";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);
  };
  console.log(resInfo);
  if (resInfo === null) return <ShimmerUI />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  console.log("menuList", itemCards);
  return (
    <div className="menu">
      <div className="rest-menu-card">
        <div className="rest-details">
          <h1>{name}</h1>
          <p>
            {cuisines.join(" ,")} - {costForTwoMessage}
          </p>
          <h2>Menu</h2>
        </div>
      </div>
      {itemCards?.map((elem) => {
        return (
          <MenuList
            key={elem?.card?.info?.id}
            menuDetails={elem?.card?.info}
          ></MenuList>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;

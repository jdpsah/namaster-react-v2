import ShimmerUI from "./Shimmer";
import MenuList from "./MenuList";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerUI />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

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

import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineMessage from "./offlineMessage";
const Body = () => {
  console.log(RestaurantCard);
  //   let restaurantList = resData;
  const [restaurantList, setRestaurantData] = useState([]);
  const [filteredRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onFilterClick = () => {
    const filtedList = restaurantList.filter(
      (elem) => elem.info.avgRating > 4.2
    );
    setFilterRestaurant(filtedList);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0310565&lng=77.6416015&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <OfflineMessage />;
  }
  return restaurantList.length !== 0 ? (
    <div className="felx mt-3">
      <div className="flex">
        <div className="px-4 mx-4 items-center border-1 rounded-sm">
          <input
            id="search-input"
            type="text"
            placeholder="Search for restaurants and food"
            maxLength="200"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            className="px-4 mx-4 h-[30px] items-center bg-green-100 rounded-sm"
            onClick={() => {
              const filteredRest = restaurantList.filter((elem) =>
                elem.info.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilterRestaurant(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 mx-2 h-[30px] items-center bg-gray-100 rounded-sm"
            onClick={onFilterClick}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="rest-container flex flex-wrap">
        {filteredRestaurant?.map((items, index) => {
          return (
            <Link
              key={index}
              to={"/restaurants/" + items.info.id}
              className="res-click"
            >
              <RestaurantCard key={items.info.id} resData={items.info} />
            </Link>
          );
        })}
      </div>
    </div>
  ) : (
    <ShimmerUI />
  );
};

export default Body;

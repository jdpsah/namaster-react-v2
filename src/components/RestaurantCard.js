import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData;
  return (
    <div
      className="rest-card card-background px-4 mx-4 h-auto w-[200px] border-1 border-gray-100 rounded-sm shadow"
      style={styles.padding_10}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <div className="card-content">
        <h4 className="break-words">{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <p>{sla.deliveryTime} Mins</p>
      </div>
    </div>
  );
};

const styles = {
  padding_10: {
    padding: 5,
    margin: 5,
  },
};

export default RestaurantCard;

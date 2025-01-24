import { useState } from "react";
import { MENU_IMG_URL } from "../utils/constants";

const MenuList = (props) => {
  const { menuDetails } = props;
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="menu-details">
      <div className="desc">
        <h2>{menuDetails?.name}</h2>
        <h4>Rs:{menuDetails?.price / 100}</h4>
        <p>{menuDetails?.description}</p>
      </div>
      <div className="menu-img-container">
        <img
          className="menu-img"
          alt="res-logo"
          src={MENU_IMG_URL + menuDetails?.imageId}
        ></img>
        <div className="add-to-cart-container">
          <button
            className="add-to-cart-btn"
            onClick={() => {
              setCartCount(cartCount + 1);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuList;

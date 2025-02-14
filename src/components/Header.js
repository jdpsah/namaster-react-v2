import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  //   let btnName = "Login";
  return (
    <div className="flex justify-between shadow h-28 bg-pink-100">
      <div className="logo-container">
        <img className="w-35" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-10 m-10">
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contactus"}>Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4">
            <Link to={"/cart"}>Cart</Link>
          </li>
          <button
            className="login px-4"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;

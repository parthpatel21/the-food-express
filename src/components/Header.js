import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.jpg";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={Logo} />
      </Link>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>

      {isLoggedIn ? (
        <img
          src="https://icon-library.com/images/sign-out-icon/sign-out-icon-10.jpg"
          style={{ height: 50, width: 50 }}
          onClick={() => setIsLoggedIn(false)}
        />
      ) : (
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          style={{ height: 50, width: 50 }}
          onClick={() => setIsLoggedIn(true)}
        />
      )}
    </div>
  );
};

export default Header;

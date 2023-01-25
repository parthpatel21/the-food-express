import React from "react";
import { IMG_LOGO_URL } from './../config';

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img
          className="logo"
          src={IMG_LOGO_URL}
        />
      </a>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {/* <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        style={{ height: 50, width: 50 }}
      /> */}
    </div>
  );
};

export default Header;

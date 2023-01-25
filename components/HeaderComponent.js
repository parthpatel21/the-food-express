import React from "react";

const HeaderComponent = () => {
  return (
    <div className="header">
      <a href="/">
        <img
          className="logo"
          src="https://dcassetcdn.com/design_img/6165/17990/17990_139608_6165_image.jpg"
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

export default HeaderComponent;

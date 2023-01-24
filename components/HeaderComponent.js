import React from "react";

const TitleComponent = () => <h1>Welcome to Food Express</h1>;

const HeaderComponent = () => {
  return (
    <div
      className="title"
      style={{
        height: 150,
        display: "flex",
        backgroundColor: "#FF00FF",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 30,
      }}
    >
      <img
        src="https://dcassetcdn.com/design_img/6165/17990/17990_139608_6165_image.jpg"
        style={{ height: 150, width: 200 }}
      />
      <input />
      <TitleComponent />
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        style={{ height: 50, width: 50 }}
      />
    </div>
  );
};

export default HeaderComponent;

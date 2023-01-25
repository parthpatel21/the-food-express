import React from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./components/BodyComponent.js";
import FooterCompoent from "./components/FooterCompoent.js";

import HeaderComponent from "./components/HeaderComponent.js";
import "./index.css";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      {/* HeaderComponent
      -Logo
      -Nav Items
      -cart
      */}
      <BodyComponent />
      {/* BodyComponent 
      - Search Bar
      - RestaurantList
        - RestaurantCard
            -Image
            -Name
            -Rating 
            -Price
      */}
      <FooterCompoent />
      {/* FooterComponent */}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

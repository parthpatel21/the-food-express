import React, { useState } from "react";
import { restaurantList as initialRestaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [searchValue, setSearchValue] = useState("");
  const [restaurantList, setRestaurantList] = useState(initialRestaurantList);

  const filterRestaurantCard = () => {
    return initialRestaurantList.filter((restaurant) =>
      restaurant.data.name.toLocaleLowerCase().includes(searchValue)
    );
  };
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredRestaurantList = filterRestaurantCard(searchValue);
            setRestaurantList(filteredRestaurantList);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurantList.map(({ data }) => (
          <RestaurantCard {...data} key={data?.uuid} />
        ))}
      </div>
    </>
  );
};

export default Body;

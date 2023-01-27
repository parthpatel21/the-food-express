import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchValue, setSearchValue] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const [allRestaurantList, setAllRestaurantList] = useState([]);

  useEffect(() => {
    try {
      getRestaurant();
    } catch (error) {
      console.log({ error });
    }
  }, []);

  const getRestaurant = async () => {
    const restaurant = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    );
    const restaurant_json = await restaurant.json();
    const list = restaurant_json?.data?.cards[2].data?.data?.cards;
    setRestaurantList(list);
    setAllRestaurantList(list);
  };

  const filterRestaurantCard = () => {
    return allRestaurantList.filter((restaurant) =>
      restaurant.data.name.toLocaleLowerCase().includes(searchValue)
    );
  };

  if (!allRestaurantList.length) {
    return <Shimmer />;
  }

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
        {restaurantList.length
          ? restaurantList.map(({ data }) => (
              <Link to={`/restaurant/${data.id}`} key={data?.uuid}>
                <RestaurantCard {...data} />
              </Link>
            ))
          : "No Restaurant Found"}
      </div>
    </>
  );
};

export default Body;

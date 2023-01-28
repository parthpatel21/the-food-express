import { useEffect, useState } from "react";
import { RESTAURANT_DETAIL_URL } from "../config";

const useRestaurant = (id) => {
  const [restuarantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const restaurant = await fetch(`${RESTAURANT_DETAIL_URL}${id}`);
    const json = await restaurant.json();
    setRestaurantInfo(json?.data);
  };

  return restuarantInfo;
};

export default useRestaurant;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restuarantInfo, setRestaurantInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const restaurant = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=19.0759837&lng=72.8776559&menuId=${id}`
    );
    const json = await restaurant.json();
    setRestaurantInfo(json?.data);
  };

  if (!restuarantInfo) {
    return <Shimmer />;
  }
  return (
    <div className="menu">
      <div>
        <h1>Restaurant id : {restuarantInfo?.id}</h1>
        <h2>{restuarantInfo?.name}</h2>
        <img src={IMG_CDN_URL + restuarantInfo?.cloudinaryImageId} />
        <h3>{restuarantInfo?.area}</h3>
        <h3>{restuarantInfo?.city}</h3>
        <h3>{restuarantInfo?.avgRatingString} stars</h3>
        <h3>{restuarantInfo?.costForTwoMsg}</h3>
      </div>

      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restuarantInfo?.menu?.items).map((item) => (
            <li key={item?.id}>
              {item?.name} - for {item?.price / 100} rs
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

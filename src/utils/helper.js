// This Makes our code
// 1. Readable
// 2. Reusable
// 3. Maintainable
// 4. Testable
// 5. Modular - Modularity means we have broken down code into meaningfull pieces

export const filterRestaurantCard = (searchText, restaurantList) => {
  return restaurantList.filter((restaurant) =>
    restaurant.data.name.toLocaleLowerCase().includes(searchText)
  );
};

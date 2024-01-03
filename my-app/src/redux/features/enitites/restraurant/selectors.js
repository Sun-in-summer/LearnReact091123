export const selectRestaurantModule = (state) => state.restaurant;
export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;
export const selectRestaurantsEntities = (state) =>
  selectRestaurantModule(state).entities;
export const selectRestaurantById = (state, id) =>
  selectRestaurantModule(state).entities[id];
export const selectDishesIdsByRestaurantId = (state, id) =>
  selectRestaurantById(state, id).menu;
export const selectReviewsByRestaurantId = (state, restaurantId) =>
  selectRestaurantById(state, restaurantId).reviews;

export const selectRestaurantsLoadingStatus = (state) =>
  selectRestaurantModule(state).status;

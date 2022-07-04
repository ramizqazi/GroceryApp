//  Get profile
export const getProfile = (state) => state.Profile.profile;

//  Get card by product
export const getCardByProduct = (state, { id }) => {
  return getProfile(state)?.card.filter((item) => item.productId === id)[0]
};

//  Get error
export const getError = (state) => state.Profile.error;


//  Get loading
export const getLoading = (state) => state.Profile.loading;

//  Get products
export const getProducts = (state) => state.Home.allIds;

//  Get byId
export const getById = (state) => state.Home.byId;

//  Get error
export const getError = (state) => state.Home.error;

//  Get loading
export const getLoading = (state) => state.Home.loading;

// Get Product by Id
export const getProductById = (state, { id }) => {
  const byId = getById(state);
  return byId[id]
};
import * as constants from './constants';
import * as helpers from '../../util/reduxHelpers';

export const INITIAL_STATE = {
  byId: {},
  allIds: [],
  error: null,
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload, error } = action;

  switch (type) {
    // PRODUCTS_GET
    case constants.PRODUCTS_GET.REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case constants.PRODUCTS_GET.FAIL:
      return {
        ...state,
        error,
      };
    case constants.PRODUCTS_GET.SUCCESS:
      return {
        ...helpers.merge(state, payload.data),
      };
    case constants.PRODUCTS_GET.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

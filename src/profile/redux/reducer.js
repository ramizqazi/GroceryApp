import * as constants from './constants';

export const INITIAL_STATE = {
  profile: {},
  error: null,
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload, error } = action;

  switch (type) {
    // PROFILE_GET
    case constants.PROFILE_GET.REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case constants.PROFILE_GET.FAIL:
      return {
        ...state,
        error,
      };
    case constants.PROFILE_GET.SUCCESS:
      return {
        profile: payload.profile,
      };
    case constants.PROFILE_GET.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    // ADD_TO_CARD
    case constants.ADD_TO_CARD.REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case constants.ADD_TO_CARD.FAIL:
      return {
        ...state,
        error,
      };
    case constants.ADD_TO_CARD.SUCCESS:
      return {
        profile: payload.profile,
      };
    case constants.ADD_TO_CARD.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    // REMOVE_TO_CARD
    case constants.REMOVE_TO_CARD.REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case constants.REMOVE_TO_CARD.FAIL:
      return {
        ...state,
        error,
      };
    case constants.REMOVE_TO_CARD.SUCCESS:
      return {
        profile: payload.profile,
      };
    case constants.REMOVE_TO_CARD.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

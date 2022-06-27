import * as constants from './constants';

const INITIAL_STATE = {
  user: null,
  error: null,
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload, error } = action;

  switch (type) {
    case constants.AUTH_STATE_CHANGE:
      return {
        ...state,
        user: payload,
      };

    // EMAIL_LOGIN
    case constants.EMAIL_LOGIN.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.EMAIL_LOGIN.SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case constants.EMAIL_LOGIN.FAIL:
      return {
        ...state,
        error,
      };
    case constants.EMAIL_LOGIN.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    // GOOGLE_LOGIN
    case constants.GOOGLE_LOGIN.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.GOOGLE_LOGIN.SUCCESS:
      return {
        ...state,
      };
    case constants.GOOGLE_LOGIN.FAIL:
      return {
        ...state,
        error,
      };
    case constants.GOOGLE_LOGIN.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    // FACEBOOK_LOGIN
    case constants.FACEBOOK_LOGIN.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.FACEBOOK_LOGIN.SUCCESS:
      return {
        ...state,
      };
    case constants.FACEBOOK_LOGIN.FAIL:
      return {
        ...state,
        error,
      };
    case constants.FACEBOOK_LOGIN.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    // FORGOT_PASSWORD
    case constants.FORGOT_PASSWORD.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.FORGOT_PASSWORD.SUCCESS:
      return {
        ...state,
      };
    case constants.FORGOT_PASSWORD.FAIL:
      return {
        ...state,
        error,
      };
    case constants.FORGOT_PASSWORD.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    // Register
    case constants.REGISTER.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.REGISTER.SUCCESS:
      return {
        ...state,
        user: payload,
      };

    case constants.REGISTER.FAIL:
      return {
        ...state,
        error,
      };
    case constants.REGISTER.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    // Logout
    case constants.LOGOUT.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.LOGOUT.SUCCESS:
      return {
        ...state,
        user: null,
      };
    case constants.LOGOUT.FAIL:
      return {
        ...state,
        error,
      };
    case constants.LOGOUT.COMPLETE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

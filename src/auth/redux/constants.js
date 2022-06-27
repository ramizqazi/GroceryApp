import { actionGenerator } from '../../util/reduxHelpers';

export const AUTH_STATE_CHANGE = 'AUT_STATE_CHANGE';

export const EMAIL_LOGIN = actionGenerator(
  'EMAIL_LOGIN',
);

export const GOOGLE_LOGIN = actionGenerator(
  'GOOGLE_LOGIN',
);

export const FACEBOOK_LOGIN = actionGenerator(
  'FACEBOOK_LOGIN',
);

export const FORGOT_PASSWORD = actionGenerator(
  'FORGOT_PASSWORD',
);

export const REGISTER = actionGenerator(
  'REGISTER',
);

export const LOGOUT = actionGenerator(
  'LOGOUT',
);

import FireStore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import * as constants from './constants';
import { Alert } from 'react-native';

const ProfileCollection = FireStore().collection('profiles');

/**
 * AUTH_STATE_CHANGE
 */
export const changeAuthState = (payload) => ({
  type: constants.AUTH_STATE_CHANGE,
  payload,
});

/**
 * loginWithEmail
 */
export const loginWithEmail = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: constants.EMAIL_LOGIN.REQUEST });

    await auth().signInWithEmailAndPassword(email, password);

    const currentUser = auth().currentUser.toJSON();

    dispatch({ type: constants.EMAIL_LOGIN.SUCCESS, payload: currentUser });
  } catch (error) {
    Alert.alert(error.message);
    dispatch({ type: constants.EMAIL_LOGIN.FAIL, error });
  } finally {
    dispatch({ type: constants.EMAIL_LOGIN.COMPLETE });
  }
};

/**
 * loginWithGoogle
 */
export const loginWithGoogle = (token) => async (dispatch) => {
  try {
    dispatch({ type: constants.GOOGLE_LOGIN.REQUEST });

    const googleCredential = await auth.GoogleAuthProvider.credential(token);

    await auth().signInWithCredential(googleCredential);

    dispatch({ type: constants.GOOGLE_LOGIN.SUCCESS });
  } catch (error) {
    Alert.alert(error.message);
    dispatch({ type: constants.GOOGLE_LOGIN.FAIL, error });
  } finally {
    dispatch({ type: constants.GOOGLE_LOGIN.COMPLETE });
  }
};

/**
 * loginWithFacebook
 */
export const loginWithFacebook = (token) => async (dispatch) => {
  try {
    dispatch({ type: constants.FACEBOOK_LOGIN.REQUEST });

    const facebookCredential = auth.FacebookAuthProvider.credential(token);

    await auth().signInWithCredential(facebookCredential);

    dispatch({ type: constants.FACEBOOK_LOGIN.SUCCESS });
  } catch (error) {
    Alert.alert(error.message);
    dispatch({ type: constants.FACEBOOK_LOGIN.FAIL, error });
  } finally {
    dispatch({ type: constants.FACEBOOK_LOGIN.COMPLETE });
  }
};

/**
 * forgotPassword
 */
export const forgotPassword = (email, cb) => async (dispatch) => {
  try {
    dispatch({ type: constants.FORGOT_PASSWORD.REQUEST });

    await auth().sendPasswordResetEmail(email);

    Alert.alert("A reset Email has been send to your email.");

    if (cb) {
      cb();
    }

    dispatch({ type: constants.FORGOT_PASSWORD.SUCCESS });
  } catch (error) {
    Alert.alert(error.message);
    dispatch({ type: constants.FORGOT_PASSWORD.FAIL, error });
  } finally {
    dispatch({ type: constants.FORGOT_PASSWORD.COMPLETE });
  }
};

/**
 * Register
 */
export const register = (info) => async (dispatch) => {
  try {
    dispatch({ type: constants.REGISTER.REQUEST });
    const {
      email,
      password,
      firstName,
      lastName,
      profileImage,
    } = info;

    await auth().createUserWithEmailAndPassword(email, password);

    await auth().currentUser.updateProfile({
      displayName: `${firstName} ${lastName}`,
      photoURL: profileImage,
    });

    const profileDoc = await ProfileCollection.doc(auth().currentUser.uid);

    const profile = {
      email,
      lastName,
      firstName,
      profileImage,
      userId: auth().currentUser.uid,
    };

    await profileDoc.set(profile);

    const currentUser = auth().currentUser.toJSON();

    dispatch({ type: constants.REGISTER.SUCCESS, payload: currentUser });
  } catch (error) {
    Alert.alert(error.message);
    dispatch({ type: constants.REGISTER.FAIL, error });
  } finally {
    dispatch({ type: constants.REGISTER.COMPLETE });
  }
};

/**
 * Logout
 */
export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: constants.LOGOUT.REQUEST });

    const user = auth().currentUser;

    if (user) {
      await auth().signOut();
    }

    dispatch({ type: constants.LOGOUT.SUCCESS });
  } catch (error) {
    Alert.alert(error.message);
    dispatch({ type: constants.LOGOUT.FAIL, error });
  } finally {
    dispatch({ type: constants.LOGOUT.COMPLETE });
  }
};

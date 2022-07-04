import { Alert } from 'react-native';
import * as constants from './constants';
import auth from '@react-native-firebase/auth';
import FireStore from '@react-native-firebase/firestore';
import { addItemToCard, removeItemToCard } from '../../util/functions';


const ProfilesCollection = FireStore().collection('profiles');

/**
 * getProfile
 */
export const getProfile = () => async (dispatch) => {
  try {
    dispatch({ type: constants.PROFILE_GET.REQUEST });

    const currentUser = auth().currentUser.uid;

    const userProfile = await (await ProfilesCollection.doc(currentUser).get()).data();

    dispatch({
      type: constants.PROFILE_GET.SUCCESS,
      payload: {
        profile: userProfile,
      }
    });
  } catch (error) {
    Alert.alert(error.message);
    dispatch({ type: constants.PROFILE_GET.FAIL, error });
  } finally {
    dispatch({ type: constants.PROFILE_GET.COMPLETE });
  }
};

/**
 * addToCard
 */
export const addToCard = (productId, cb) => async (dispatch) => {
  try {
    dispatch({ type: constants.ADD_TO_CARD.REQUEST });

    // GET USER CARD
    const currentUser = auth().currentUser.uid;
    const userProfile = await ProfilesCollection.doc(currentUser).get();
    const userCard = await userProfile.data().card;

    const updatedCard = await addItemToCard(userCard, productId)

    const updatedProfile = await ProfilesCollection.doc(currentUser).update({ card: updatedCard })

    dispatch({
      type: constants.ADD_TO_CARD.SUCCESS,
      payload: {
        profile: updatedProfile,
      }
    });
    if (cb) {
      cb();
    }
  } catch (error) {
    Alert.alert(error.message);
    dispatch({ type: constants.ADD_TO_CARD.FAIL, error });
  } finally {
    dispatch({ type: constants.ADD_TO_CARD.COMPLETE });
  }
};


/**
 * removeToCard
 */
export const removeToCard = (productId, cb) => async (dispatch) => {
  try {
    dispatch({ type: constants.REMOVE_TO_CARD.REQUEST });

    // GET USER CARD
    const currentUser = auth().currentUser.uid;
    const userProfile = await ProfilesCollection.doc(currentUser).get();
    const userCard = await userProfile.data().card;

    const updatedCard = await removeItemToCard(userCard, productId)

    const updatedProfile = await ProfilesCollection.doc(currentUser).update({ card: updatedCard })

    dispatch({
      type: constants.REMOVE_TO_CARD.SUCCESS,
      payload: {
        profile: updatedProfile,
      }
    });

    if (cb) {
      cb();
    }
  } catch (error) {
    Alert.alert(error.message);
    dispatch({ type: constants.REMOVE_TO_CARD.FAIL, error });
  } finally {
    dispatch({ type: constants.REMOVE_TO_CARD.COMPLETE });
  }
};


import FireStore from '@react-native-firebase/firestore';
import * as constants from './constants';
import { Alert } from 'react-native';

const ProductsCollection = FireStore().collection('products');

/**
 * getProducts
 */
export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: constants.PRODUCTS_GET.REQUEST });

    const productsSnapshot = await ProductsCollection.get();

    const products = [];

    if (!productsSnapshot.empty) {
      productsSnapshot.forEach((snapshot) => {
        products.push({
          ...snapshot.data(),
          id: snapshot.id,
        });
      });
    };

    dispatch({
      type: constants.PRODUCTS_GET.SUCCESS,
      payload: {
        data: products,
      }
    });
  } catch (error) {
    Alert.alert(error.message);
    dispatch({ type: constants.PRODUCTS_GET.FAIL, error });
  } finally {
    dispatch({ type: constants.PRODUCTS_GET.COMPLETE });
  }
};

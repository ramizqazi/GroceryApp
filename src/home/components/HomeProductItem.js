import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { Button, Card, Text, View } from '../../common';

import { getProductById } from '../redux/selectors';
import { getCardByProduct } from '../../profile/redux/selectors';
import { addToCard as addToCardAction, removeToCard as removeToCardAction } from '../../profile/redux/actions';

/* =============================================================================
<HomeProductItem />
============================================================================= */
const HomeProductItem = ({ product, card, removeToCard, addToCard }) => {
  const [qty, setQty] = useState(card?.qty);
  const { width, height } = Dimensions.get('window');
  const styles = getStyles(width, height)
  const productId = product?.id;
  const productImg = product?.productImg;
  const productName = product?.name;
  const productPrice = product?.price;

  const _handleAddToCard = () => {
    addToCard(productId, () => setQty((prevState) => prevState < 1 ? 1 : prevState++))
  };

  const _handleRemoveToCard = () => {
    removeToCard(productId, () => setQty((prevState) => prevState > 1 ? prevState-- : 0))
  };

  return (
    <Card style={styles.container}>
      <Image style={styles.img} source={{ uri: productImg }} />
      <View style={styles.contentContainer}>
        <Text lg>{productName}</Text>
        <Text md>{`${productPrice} Rs`}</Text>
        <View style={styles.counterContainer} horizontal>
          <Button style={styles.btn} title='+' onPress={_handleAddToCard} />
          <Text>{qty}</Text>
          <Button style={styles.btn} title='-' onPress={_handleRemoveToCard} />
        </View>
      </View>
    </Card>
  );
};

const getStyles = (WinWidth, WinHeight) => StyleSheet.create({
  container: {
    marginBottom: 20,
    minWidth: WinWidth * 0.4,
  },
  contentContainer: {
    paddingHorizontal: 8,
  },
  img: {
    width: '100%',
    height: WinHeight * 0.1,
  },
  counterContainer: {
    marginTop: 10,
    justifyContent: 'space-around'
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  }
})

const mapStateToProps = (state, { id }) => ({
  card: getCardByProduct(state, { id }),
  product: getProductById(state, { id })
});

const mapDispatchToProps = {
  addToCard: addToCardAction,
  removeToCard: removeToCardAction,
};

/* Export
============================================================================= */
export default connect(mapStateToProps, mapDispatchToProps)(HomeProductItem);

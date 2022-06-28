import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { Button, Card, Text, View } from '../../common';

import { getProductById } from '../redux/selectors';

/* =============================================================================
<HomeProductItem />
============================================================================= */
const HomeProductItem = ({ product }) => {
  const { width, height } = Dimensions.get('window');
  const styles = getStyles(width, height)
  const productImg = product?.productImg;
  const productName = product?.name;
  const productPrice = product?.price;

  return (
    <Card style={styles.container}>
      <Image style={styles.img} source={{ uri: productImg }} />
      <View style={styles.contentContainer}>
        <Text lg>{productName}</Text>
        <Text md>{`${productPrice} Rs`}</Text>
        {/* <View style={styles.counterContainer} horizontal>
          <Button style={styles.btn} title='+' onPress={_handleUpVotePress} />
          <Text>{productVotes}</Text>
          <Button style={styles.btn} title='-' onPress={_handleDownVotePress} />
        </View> */}
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
  product: getProductById(state, { id })
});

/* Export
============================================================================= */
export default connect(mapStateToProps)(HomeProductItem);

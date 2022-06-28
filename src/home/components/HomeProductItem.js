import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';

import { Button, Card, Text, View } from '../../common';

/* =============================================================================
<HomeProductItem />
============================================================================= */
const HomeProductItem = ({ product, upvote, downvote }) => {
  const { width, height } = Dimensions.get('window');
  const styles = getStyles(width, height)
  const productImg = product?.img;
  const productName = product?.name;
  const productPrice = product?.price;
  const productVotes = product?.votes;

  const _handleUpVotePress = () => {
    upvote(product.id)
  };

  const _handleDownVotePress = () => {
    downvote(product.id)
  };

  return (
    <Card style={styles.container}>
      <Image style={styles.img} source={{ uri: productImg }} />
      <View style={styles.contentContainer}>
        <Text lg>{productName}</Text>
        <Text md>{productPrice}</Text>
        <View style={styles.counterContainer} horizontal>
          <Button style={styles.btn} title='+' onPress={_handleUpVotePress} />
          <Text>{productVotes}</Text>
          <Button style={styles.btn} title='-' onPress={_handleDownVotePress} />
        </View>
      </View>
    </Card>
  );
};

const getStyles = (WinWidth, WinHeight) => StyleSheet.create({
  container: {
    minWidth: WinWidth * 0.4,
    marginBottom: 20,
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

/* Export
============================================================================= */
export default HomeProductItem;

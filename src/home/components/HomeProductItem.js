import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Button, Card, Text, View } from '../../common';

/* =============================================================================
<HomeProductItem />
============================================================================= */
const HomeProductItem = ({ product, upvote, downvote }) => {
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
          <Button title='+' onPress={_handleUpVotePress} />
          <Text>{productVotes}</Text>
          <Button title='-' onPress={_handleDownVotePress} />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 165,
    marginBottom: 20,
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  img: {
    width: '100%',
    height: 120,
  },
  counterContainer: {
    marginTop: 10,
    justifyContent: 'space-around'
  }
})

/* Export
============================================================================= */
export default HomeProductItem;

import React, { useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ProductsData from '../../static/Products';
import GroceryAppProductItem from '../components/GroceryAppProductItem';
import { Container, Content, Text, View } from '../../common';

/* =============================================================================
<GroceryAppScreen />
============================================================================= */
const GroceryAppScreen = () => {
  const [products, setProducts] = useState(ProductsData);
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);

  const _handleUppVote = (id) => {
    setProducts((prevState) => prevState.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          votes: product.votes + 1,
        }
      } else {
        return product
      }
    }))
  };

  const _handleDownVote = (id) => {
    setProducts((prevState) => prevState.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          votes: product.votes > 0 ? product.votes - 1 : 0,
        }
      } else {
        return product
      }
    }))
  };

  return (
    <Container>
      <StatusBar translucent barStyle='dark-content' backgroundColor='transparent' />
      <Content contentContainerStyle={styles.content}>
        <Text h1 center style={styles.titleTxt1}>Grocery</Text>
        <Text h2 center style={styles.titleTxt2}>App</Text>
        <View horizontal style={styles.productsContainer}>
          {products?.map((product) => (
            <GroceryAppProductItem
              key={product.id}
              product={product}
              upvote={_handleUppVote}
              downvote={_handleDownVote}
            />
          ))}
        </View>
      </Content>
    </Container>
  );
};

const getStyles = (insets) => StyleSheet.create({
  content: {
    marginTop: insets.top + 20,
  },
  titleTxt1: {
    color: '#4ec248',
  },
  titleTxt2: {
    marginTop: -20,
    marginLeft: '40%',
  },
  productsContainer: {
    marginTop: 50,
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
})

/* Export
============================================================================= */
export default GroceryAppScreen;

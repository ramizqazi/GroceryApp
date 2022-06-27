import React, { useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import ProductsData from '../../static/Products';
import HomeProductItem from '../components/HomeProductItem';
import { Container, Content, AppLogoHeader, View } from '../../common';

/* =============================================================================
<HomeScreen />
============================================================================= */
const HomeScreen = () => {
  const [products, setProducts] = useState(ProductsData);

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
      <Content>
        <AppLogoHeader />
        <View horizontal style={styles.productsContainer}>
          {products?.map((product) => (
            <HomeProductItem
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

const styles = StyleSheet.create({
  productsContainer: {
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
})

/* Export
============================================================================= */
export default HomeScreen;

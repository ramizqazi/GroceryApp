import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StatusBar, StyleSheet } from 'react-native';

import ProductsData from '../../static/Products';
import HomeProductItem from '../components/HomeProductItem';
import { Container, Content, AppLogoHeader, View } from '../../common';

import { getProducts as getProductsAction } from '../redux/actions';
import { getProducts as selectProducts } from '../redux/selectors';

/* =============================================================================
<HomeScreen />
============================================================================= */
const HomeScreen = ({ getProducts, products }) => {

  // Get Products
  useEffect(() => {
    getProducts();
  }, [])

  return (
    <Container>
      <StatusBar translucent barStyle='dark-content' backgroundColor='transparent' />
      <Content>
        <AppLogoHeader />
        <View horizontal style={styles.productsContainer}>
          {products?.map((product) => (
            <HomeProductItem key={product} id={product} />
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
});

const mapStateToProps = (state) => ({
  products: selectProducts(state),
});

const mapDispatchToProps = {
  getProducts: getProductsAction,
};


/* Export
============================================================================= */
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

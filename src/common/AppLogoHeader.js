import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Text from './Text';

/* =============================================================================
<HomeHeader />
============================================================================= */
const HomeHeader = () => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);

  return (
    <>
      <Text h1 center style={styles.titleTxt1}>Grocery</Text>
      <Text h2 center style={styles.titleTxt2}>App</Text>
    </>
  );
};

const getStyles = (insets) => StyleSheet.create({
  titleTxt1: {
    paddingTop: insets.top + 29,
    color: '#4ec248',
  },
  titleTxt2: {
    marginTop: -20,
    marginBottom: 35,
    marginLeft: '30%',
  },
})

/* Export
============================================================================= */
export default HomeHeader;

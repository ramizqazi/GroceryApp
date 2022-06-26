import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Text from './Text';
import View from './View';
import Touchable from './Touchable';
import ChevronLeft from '../assets/icon/edit-chevron-left.svg';

/* =============================================================================
<AppLogoHeader />
============================================================================= */
const AppLogoHeader = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);

  const _handleBackPress = () => {
    navigation.goBack();
  }

  return (
    <View horizontal style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle='dark-content'
      />
      <Touchable style={styles.backBtn} onPress={_handleBackPress}>
        <ChevronLeft />
      </Touchable>
      <View center style={styles.center}>
        <Text h1 center style={styles.titleTxt1}>Grocery</Text>
        <Text h2 center style={styles.titleTxt2}>App</Text>
      </View>
      <View />
    </View>
  );
};

const getStyles = (insets) => StyleSheet.create({
  container: {
    height: insets.top + 150,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: insets.top + 20,
  },
  center: {
    paddingRight: 50,
    paddingVertical: insets.top,
  },
  titleTxt1: {
    color: '#4ec248',
  },
  titleTxt2: {
    marginTop: -20,
    marginBottom: 35,
    marginLeft: '40%',
  },
  backBtn: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  }
})

/* Export
============================================================================= */
export default AppLogoHeader;

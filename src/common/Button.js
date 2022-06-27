import React from 'react';
import { StyleSheet, Pressable, Text, ActivityIndicator } from 'react-native';


/* =============================================================================
<Button />
============================================================================= */
const Button = ({ loading, left, right, title, style, btnTxtStyles, onPress, loadingColor }) => {

  const _handlePress = () => {
    if (typeof onPress === 'function') {
      onPress();
    };
  };

  return (
    <Pressable style={[styles.container, style]}
      onPress={_handlePress}
    >
      {left}
      {!loading ? (
        <Text
          style={[
            styles.title,
            btnTxtStyles
          ]}>
          {title}
        </Text>
      ) : <ActivityIndicator style={styles.indicator} color={loadingColor ? loadingColor : 'white'} />}
      {right}
    </Pressable>
  );
};


const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 50 / 2,
    paddingHorizontal: 20,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4ec248',
  },
  title: {
    fontSize: 16,
    color: '#fff',
    marginHorizontal: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
  indicator: {
    marginHorizontal: 20,
  }
});

/* Export
============================================================================= */
export default Button;

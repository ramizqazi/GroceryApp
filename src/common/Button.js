import React from 'react';
import { StyleSheet, Pressable, Text, ActivityIndicator } from 'react-native';


/* =============================================================================
<Button />
============================================================================= */
const Button = ({ loading, title, variant, size, style, btnTxtStyles, onPress }) => {

  const _handlePress = () => {
    if (typeof onPress === 'function') {
      onPress();
    };
  };

  return (
    <Pressable style={[
      styles.container,
      size === 'sm' && styles.sm,
      size === 'lg' && styles.lg,
      style,
    ]}
      onPress={_handlePress}
    >
      {loading ? <ActivityIndicator color='#fff' /> : null}
      {!loading && (
        <Text
          style={[
            styles.title,
            btnTxtStyles
          ]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};


const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    justifyContent: 'center',
    backgroundColor: '#0091D6'
  },
  title: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
});

/* Export
============================================================================= */
export default Button;

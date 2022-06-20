import React, { useRef } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput as RNTextInput,
} from 'react-native';


/* =============================================================================
<TextInput />
============================================================================= */
const TextInput = ({
  left,
  right,
  value,
  editable,
  disabled,
  placeholder,
  labelStyle,
  inputStyle,
  containerStyle,
  contentContainerStyle,
  onPress,
  onChange,
  ...props
}) => {
  const _textInput = useRef();

  const _handleChange = inputValue => {
    if (typeof onChange === 'function') {
      onChange(inputValue);
    }
  };

  const _handlePress = e => {
    if (typeof onPress === 'function') {
      onPress(e);
    } else if (_textInput.current && editable) {
      _textInput.current.focus();
    }
  };

  return (
    <Pressable
      style={[styles.container, containerStyle]}
      disabled={disabled}
      onPress={_handlePress}>
      <View
        style={[
          styles.content,
          contentContainerStyle,
        ]}>
        {left}
        <RNTextInput
          ref={_textInput}
          value={value}
          style={[
            styles.input,
            left && styles.inputWithLeft,
            right && styles.inputWithRight,
            inputStyle,
          ]}
          editable={editable}
          selectionColor="#8A93A0"
          placeholderTextColor="#999"
          placeholder={placeholder}
          onChangeText={_handleChange}
          {...props}
        />
        {right}
      </View>
    </Pressable>
  );
};

TextInput.defaultProps = {
  editable: true,
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: 'transparent',
  },
  content: {
    height: 49,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    justifyContent: 'center',
    borderColor: '#999',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 49,
    marginTop: 2,
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  inputWithLeft: {
    marginLeft: 10,
  },
  inputWithRight: {
    marginRight: 10,
  },
});

/* Export
============================================================================= */
export default TextInput;

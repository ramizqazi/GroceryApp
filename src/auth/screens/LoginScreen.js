import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { AppLogoHeader, Button, Container, Content, Text, TextInput, Touchable, View } from '../../common';

/* =============================================================================
<LoginScreen />
============================================================================= */
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const _handleLinkPress = () => {
    // navigation.navigate('Register')
  };

  return (
    <Container>
      <AppLogoHeader />
      <Content>
        <TextInput
          value={email}
          onChange={setEmail}
          placeholder='Enter Email'
        />
        <TextInput
          value={password}
          placeholder='Enter Password'
          secureTextEntry={true}
          onChange={setPassword}
        />
        <View center>
          <Button title='Sign in' />
        </View>
        <Touchable center style={styles.link} onPress={_handleLinkPress}>
          <Text sm style={styles.linkTxt}>Or Sign up</Text>
        </Touchable>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  link: {
    marginTop: 20,
  },
  linkTxt: {
    color: '#4ec248'
  }
})

export default LoginScreen;

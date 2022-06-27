import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import {
  View,
  Text,
  Button,
  Content,
  TextInput,
  Touchable,
  Container,
  AppLogoHeader,
} from '../../common';
import SocialAuthButton from '../components/SocialAuthButton';

import { getLoading } from '../redux/selectors';
import { loginWithEmail as loginWithEmailAction } from '../redux/actions';

/* =============================================================================
<LoginScreen />
============================================================================= */
const LoginScreen = ({ navigation, loading, loginWithEmail }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const disabled = !email || !password;

  const _handleRegisterPress = () => {
    navigation.navigate('Register')
  };

  const _handleForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword')
  };

  const _handleSubmit = () => {
    if (!disabled) {
      loginWithEmail(email, password);
    }
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
          <Button loading={loading} title='Sign in' onPress={_handleSubmit} />
        </View>
        <SocialAuthButton provider="google" />
        <SocialAuthButton provider="facebook" />
        <Touchable center style={styles.link} onPress={_handleRegisterPress}>
          <Text sm style={styles.linkTxt}>Or Sign up</Text>
        </Touchable>
        <Touchable center style={styles.link} onPress={_handleForgotPasswordPress}>
          <Text sm style={styles.linkTxt}>Forgot Password ?</Text>
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

const mapStateToProps = (state) => ({
  loading: getLoading(state),
})

const mapDispatchToProps = {
  loginWithEmail: loginWithEmailAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

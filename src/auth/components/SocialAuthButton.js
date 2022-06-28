import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Alert, StyleSheet } from 'react-native';
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

import { Button } from '../../common';
import GoogleIcon from '../../assets/icon/edit-google.svg';
import FacebookIcon from '../../assets/icon/edit-facebook.svg';

import { getLoading } from '../redux/selectors'
import {
  loginWithGoogle as loginWithGoogleAction,
  loginWithFacebook as loginWithFacebookAction
} from '../redux/actions';


/* =============================================================================
<SocialAuthButton />
============================================================================= */
const SocialAuthButton = ({ provider, loginWithFacebook, loginWithGoogle }) => {

  const _handleGoogleLogin = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      loginWithGoogle(idToken);
    } catch (error) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          Alert.alert('Info', 'User cancelled the process');
          break;
        case statusCodes.IN_PROGRESS:
          Alert.alert('Info', 'Sign in already in progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          Alert.alert('Info', 'Play services not available or outdated');
          break;
        default:
          Alert.alert('Info', error.message);
      }
    }
  };

  const _handleFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'email',
        'public_profile',
      ]);
      if (!result.isCancelled) {
        const token = await AccessToken.getCurrentAccessToken();
        await loginWithFacebook(token?.accessToken.toString());
      }
    } catch (e) {
      Alert.alert('Info', 'Something went wrong');
    }
  };


  if (provider === 'google') {
    return (
      <Button
        loadingColor="black"
        style={[styles.btn, styles.googleBtn]}
        btnTxtStyles={styles.googleBtnTxt}
        left={<GoogleIcon />}
        title='Sign in With Google'
        onPress={_handleGoogleLogin}
      />
    )
  }

  return (
    <Button
      style={[styles.btn, styles.facebookBtn]}
      btnTxtStyles={styles.facebookBtnTxt}
      title="Sign in With Facebook"
      left={<FacebookIcon />}
      onPress={_handleFacebookLogin}
    />
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 15,
    borderRadius: 15,
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  googleBtn: {
    backgroundColor: '#f76754'
  },
  googleBtnTxt: {
    color: '#fff'
  },
  facebookBtn: {
    backgroundColor: '#3e8bd6'
  },
  facebookBtnTxt: {
    color: '#fff'
  },
});

const mapStateToProps = (state) => ({
  loading: getLoading(state),
})

const mapDispatchToProps = {
  loginWithGoogle: loginWithGoogleAction,
  loginWithFacebook: loginWithFacebookAction
}

export default connect(mapStateToProps, mapDispatchToProps)(SocialAuthButton);

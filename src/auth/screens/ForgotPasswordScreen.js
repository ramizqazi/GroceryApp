import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Button, Container, Content, Text, TextInput, View } from '../../common';
import AppLogoStackHeader from '../../common/AppLogoStackHeader';

import { forgotPassword as forgotPasswordAction } from '../redux/actions';
import { getLoading } from '../redux/selectors';

/* =============================================================================
<ForgotPasswordScreen />
============================================================================= */
const ForgotPasswordScreen = ({ loading, forgotPassword, navigation }) => {
  const [email, setEmail] = useState('');

  const _handleForgotPassword = () => {
    if (email) {
      forgotPassword(email, () => navigation.goBack());
    };
  };

  return (
    <Container>
      <Content>
        <AppLogoStackHeader />
        <Text sm>Enter your email to reset your password</Text>
        <TextInput placeholder='Email' value={email} onChange={setEmail} />
        <View center>
          <Button title='Submit' loading={loading} onPress={_handleForgotPassword} />
        </View>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  loading: getLoading(state),
})

const mapDispatchToProps = {
  forgotPassword: forgotPasswordAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen);

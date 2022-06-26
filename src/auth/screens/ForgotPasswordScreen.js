import React, { useState } from 'react';

import { Button, Container, Content, Text, TextInput, View } from '../../common';
import AppLogoStackHeader from '../../common/AppLogoStackHeader';

/* =============================================================================
<ForgotPasswordScreen />
============================================================================= */
const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  return (
    <Container>
      <Content>
        <AppLogoStackHeader />
        <Text sm>Enter your email to reset your password</Text>
        <TextInput placeholder='Email' value={email} onChange={setEmail} />
        <View center>
          <Button title='Submit' />
        </View>
      </Content>
    </Container>
  );
};

export default ForgotPasswordScreen;

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RegisterScreen from './auth/screens/RegisterScreen'
import LoginScreen from './auth/screens/LoginScreen'
import ForgotPasswordScreen from './auth/screens/ForgotPasswordScreen'
import HomeScreen from './home/screens/HomeScreen'

/* =============================================================================
<App />
============================================================================= */
const App = () => {
  return <SafeAreaProvider><ForgotPasswordScreen /></SafeAreaProvider>;
};

/* Export
============================================================================= */
export default App;

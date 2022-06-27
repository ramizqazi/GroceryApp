import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { StatusBar } from 'react-native';
import FirebaseAuth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from '../auth/screens/AuthStack';
import HomeStack from '../home/screens/HomeScreen';

import { getUser } from '../auth/redux/selectors';
import { changeAuthState as changeAuthStateAction } from '../auth/redux/actions';

const Stack = createNativeStackNavigator();

/* =============================================================================
<AppNavigation />
============================================================================= */
const AppNavigation = ({ changeAuthState, authenticated }) => {
  const [initializing, setInitializing] = useState(true);

  // firebase user state check 
  useEffect(() => {
    FirebaseAuth().onAuthStateChanged(async (user) => {
      if (user) {
        changeAuthState(user.toJSON());
      }
      setInitializing(false);
    })
  }, [])

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer theme={THEME}>
      <StatusBar translucent barStyle='dark-content' backgroundColor='transparent' />
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
        {authenticated ? (
          <>
            <Stack.Screen name="HomeStack" component={HomeStack} />
          </>
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const THEME = {
  dark: false,
  colors: {
    primary: '#4ec248',
    background: '#fff',
    text: '#000',
    border: "#d1d1d1",
    notification: "#4ec248",
  },
};


const mapStateToProps = (state) => ({
  authenticated: !!getUser(state),
});

const mapDispatchToProps = {
  changeAuthState: changeAuthStateAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);

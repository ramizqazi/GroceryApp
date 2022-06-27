import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react'
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import AppNavigation from './navigation/AppNavigation';
import configureStore from './redux/configureStore';

const { persistor, store } = configureStore();

GoogleSignin.configure({
  webClientId: '934109351600-p68c1ingqqn78truu84c1g05o8282pu8.apps.googleusercontent.com',
});

/* =============================================================================
<App />
============================================================================= */
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PersistGate persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </SafeAreaProvider>
    </Provider>
  );
};


/* Export
============================================================================= */
export default App;

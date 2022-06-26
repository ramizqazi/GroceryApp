import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigation from './navigation/AppNavigation'

/* =============================================================================
<App />
============================================================================= */
const App = () => {
  return <SafeAreaProvider><AppNavigation /></SafeAreaProvider>;
};

/* Export
============================================================================= */
export default App;

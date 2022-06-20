import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import GroceryAppScreen from './GroceryApp/screens/GroceryAppScreen'

/* =============================================================================
<App />
============================================================================= */
const App = () => {
  return <SafeAreaProvider><GroceryAppScreen /></SafeAreaProvider>;
};

/* Export
============================================================================= */
export default App;

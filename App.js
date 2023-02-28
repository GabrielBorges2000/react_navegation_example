import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { AppNavigator } from './route';

const App = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default App;

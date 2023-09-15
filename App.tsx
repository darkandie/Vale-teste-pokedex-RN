import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/screens/routes/Router';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

export default App;

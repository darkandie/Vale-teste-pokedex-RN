import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/screens/routes/Router';
import { NativeBaseProvider } from "native-base";

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider> 
    </NavigationContainer>
  )
}

export default App;

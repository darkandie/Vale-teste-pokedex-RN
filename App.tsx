import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/screens/routes/Router';
import { NativeBaseProvider } from "native-base";
import { store } from './src/store/store';
import { Provider } from 'react-redux'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <Router />
        </NativeBaseProvider> 
      </NavigationContainer>
    </Provider>
  )
}

export default App;

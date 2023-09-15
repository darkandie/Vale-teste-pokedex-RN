import React, { type FunctionComponent } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home/Home';
import Details from '../Details/Details';

const Stack = createNativeStackNavigator();

const Router: FunctionComponent = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default Router;
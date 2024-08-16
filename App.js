import React from 'react';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        {/* <Stack.Screen name='Home'>
        {(props) => <Home {...props} channelName={"Asjad Naveed"} />}
         </Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

import React from 'react';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Users from './src/screens/Users';
import Courses from './src/screens/Courses';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
         <Stack.Screen name='About' component={About}/>
         <Stack.Screen name='Contact' component={Contact} />
         <Stack.Screen name='Users' component={Users} />
         <Stack.Screen name='Courses' component={Courses} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

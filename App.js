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
        <Stack.Screen name='Home' component={Home} options={
          {
            headerShown:false
          }
        }/>
        {/* About Us Screen */}
         <Stack.Screen name='About' component={About} options={
          {
            headerTitleStyle:{
              fontSize:25,
            },
            headerTitleAlign: 'center',
          }
         }/>
         {/* Contac Us Screen */}
         <Stack.Screen name='Contact' component={Contact} options={
          {
            headerTitleStyle:{
              fontSize:25,
            },
            headerTitleAlign: 'center',
          }
         }/>
         {/* Students Screen */}
         <Stack.Screen name='Users' component={Users} options={
          {
            headerTitleStyle:{
              fontSize:25,
            },
            headerTitleAlign: 'center',
          }
         }/>
         {/* Courses Screen */}
         <Stack.Screen name='Courses' component={Courses} options={
          {
            headerTitleStyle:{
              fontSize:25,
            },
            headerTitleAlign: 'center',
          }
         }/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

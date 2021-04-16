import React from "react";

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import ShoppingCar from './Pages/ShoppingCar';


const Stack = createStackNavigator();
const Tab = createDrawerNavigator();

function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      {/* <Tab.Screen name="Configurar" component={Config} /> */}
    </Tab.Navigator>

  )

}


export default function Routes({navigation}) {
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ShoppingCar" component={ShoppingCar} />

        </Stack.Navigator>
      </NavigationContainer>
  );
}
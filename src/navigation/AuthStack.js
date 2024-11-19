import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import navigationStrings from './navigationStrings';
import OnBoard from '../screens/Onboard/onboard';
import Login from '../screens/Login/login';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name={navigationStrings.ONBOARD} component={OnBoard} />
      <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})
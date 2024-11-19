import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import navigationStrings from './navigationStrings';
import DashBoard from '../screens/DashBoard/dashboard';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationStrings.DASHBOARD} component={DashBoard} />
        </Stack.Navigator>
    )
}

export default AppStack

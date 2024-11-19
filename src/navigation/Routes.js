import { View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './AppStack'
import AuthStack from './AuthStack'

const Routes = () => {
  const { userToken } = useContext(AuthContext)
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {userToken ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </View>
  )
}

export default Routes

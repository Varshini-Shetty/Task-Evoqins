import { StyleSheet, View } from 'react-native'
import React from 'react'
import colors from './src/constants/colors'
import { AuthProvider } from './src/context/AuthContext'
import Routes from './src/navigation/Routes'
import DashBoard from './src/screens/DashBoard/dashboard'
const App = () => {
  return (
    <AuthProvider>
      <View style={styles.container}>
        <Routes/>
      </View>
    </AuthProvider>
    
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  }
})
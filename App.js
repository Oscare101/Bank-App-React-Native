import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import MainNavigation from './screens/mainNavigation'

export default function App() {
  return (
    <View style={styles.container}>
      <MainNavigation />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

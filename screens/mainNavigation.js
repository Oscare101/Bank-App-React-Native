import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MainScreen from './mainScreen'

const Stack = createStackNavigator()

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
})

export default function MainNavigation() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{
              headerLeft: () => null,
              cardStyleInterpolator: forFade,
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

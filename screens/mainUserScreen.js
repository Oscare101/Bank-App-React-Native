import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import CardSmall from '../components/cardSmall'

export default function MainUserScreen(props) {
  return (
    <View style={styles.container}>
      <View>
        <CardSmall />
      </View>
      <TouchableOpacity
        onPress={() => {
          props.onChange('login')
        }}
      >
        <Text>BACK</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})

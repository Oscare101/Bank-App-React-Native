import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import CardBig from './components/cardBig'
import CardSmall from './components/cardSmall'

export default function App() {
  return (
    <View style={styles.container}>
      <CardSmall />
      <CardBig />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

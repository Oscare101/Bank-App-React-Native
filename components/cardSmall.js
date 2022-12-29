import { View, Text, Dimensions, StyleSheet } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

const width = Dimensions.get('window').width

export default function CardSmall() {
  return (
    <LinearGradient
      // Button Linear Gradient

      start={[0, 0]}
      end={[1, 1]}
      location={[0.25, 0.4, 1]}
      colors={['#18181b', '#35353d']}
      style={styles.cardView}
    >
      <Text style={styles.bankNAme}>The Bank</Text>
      <View style={styles.topRow}>
        <Text style={styles.cardNumber}>•••• 5678</Text>
        <View style={styles.leftCircle}>
          <View style={styles.rightCircle} />
        </View>
      </View>
      <View style={styles.bottomRow}>
        <Text style={styles.amount}>
          4,600.
          <Text style={styles.smallCoins}>
            55<Text style={styles.smallUAH}> ₴</Text>
          </Text>
        </Text>
        <Text style={styles.name}>Kyryl F.</Text>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  cardView: {
    width: width * 0.9,
    height: width * 0.9 * 0.4,
    backgroundColor: '#000',
    borderRadius: 15,
    overflow: 'hidden',
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  bankNAme: {
    position: 'absolute',
    top: 20,
    left: 20,
    color: '#969696',
    fontSize: 14,
  },

  // top row
  topRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 22,
    letterSpacing: 1,
  },
  leftCircle: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#eb001b',
    marginHorizontal: 25,
  },
  rightCircle: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#f79e1b',
    position: 'absolute',
    right: -20,
  },

  // bottom row

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  amount: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },
  smallCoins: {
    fontSize: 20,
  },
  smallUAH: {
    fontWeight: '300',
  },

  name: {
    fontSize: 22,
    color: '#969696',
  },
})

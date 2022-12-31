import React, { useState, useRef } from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import CardBig from './cardBig'
import CardSmall from './cardSmall'

const width = Dimensions.get('window').width

export default function CardDinamic(props) {
  const fadeAnim = useRef(new Animated.Value(width * 0.9 * 0.4)).current
  const [size, setSize] = useState('small')

  function DinamicBigger() {
    setSize('big')
    props.onHide(false)
    Animated.timing(fadeAnim, {
      toValue: ((width * 0.9) / 8.5) * 5.4,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }

  function DinamicSmaller() {
    setSize('small')
    props.onHide(true)
    Animated.timing(fadeAnim, {
      toValue: width * 0.9 * 0.4,
      duration: 200,
      useNativeDriver: false,
    }).start()
    props.onHide(true)
  }

  function Small() {
    return (
      <>
        <Text style={styles.bankNAme}> The Bank</Text>
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
      </>
    )
  }

  function Big() {
    return (
      <>
        <View style={styles.topRowBig}>
          <Text style={styles.bankNAmeBig}>The Bank</Text>

          <View style={styles.leftCircle}>
            <View style={styles.rightCircle} />
          </View>
        </View>
        <View>
          <Text style={styles.amount}>
            4,600.
            <Text style={styles.smallCoins}>
              55<Text style={styles.smallUAH}> ₴</Text>
            </Text>
          </Text>
        </View>
        <View style={styles.middleRowBig}>
          <Text style={styles.cardNumberBig}>0000 0000 1234 5678</Text>
        </View>
        <View style={styles.bottomRowBig}>
          <Text style={styles.name}>Kyryl Fedortsev</Text>
        </View>
      </>
    )
  }

  return (
    <>
      <Animated.View style={{ width: width * 0.9, height: fadeAnim }}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => (size == 'small' ? DinamicBigger() : DinamicSmaller())}
        >
          <LinearGradient
            // Button Linear Gradient

            start={[0, 0]}
            end={[1, 1]}
            location={[0.25, 0.4, 1]}
            colors={['#18181b', '#35353d']}
            style={styles.cardView}
          >
            {size == 'small' ? <Small /> : <Big />}
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  animView: {
    padding: 0,
  },
  cardView: {
    // width: width * 0.9,
    // height: width * 0.9 * 0.4,
    width: '100%',
    height: '100%',
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

  bankNAmeBig: {
    color: '#969696',
    fontSize: 14,
  },

  // top row
  topRowBig: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // middle Row

  middleRowBig: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
    marginBottom: 20,
  },

  // bottom row

  bottomRowBig: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardNumberBig: {
    color: '#ddd',
    fontSize: 28,
    letterSpacing: 2,
  },
})

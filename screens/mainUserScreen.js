import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native'
import CardDinamic from '../components/cardDinamic'

import CardSmall from '../components/cardSmall'

const width = Dimensions.get('window').width

export default function MainUserScreen(props) {
  const [visibleUnderRCard, setVisibleUnderRCard] = useState(true)

  return (
    <View style={styles.container}>
      <LinearGradient
        start={[0, 0]}
        end={[1, 1]}
        location={[0.25, 0.4, 1]}
        colors={['#3ea9b7', '#328089']}
        style={styles.headerView}
      >
        <CardDinamic onHide={(i) => setVisibleUnderRCard(i)} />
        <View
          style={[
            styles.undexrCardView,
            { opacity: visibleUnderRCard ? 1 : 0 },
          ]}
        >
          <Text>Some Items here</Text>
        </View>
      </LinearGradient>

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
  headerView: {
    paddingTop: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: ((width * 0.9) / 8.5) * 5.4 + 80,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  undexrCardView: {
    position: 'absolute',
    bottom: 25,
    marginTop: 20,
    width: '100%',
    height: 70,
  },
})

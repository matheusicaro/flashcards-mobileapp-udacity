import React from 'react'
import {
  ScrollView,
  Text,
  View
} from 'react-native'

import styles from '../styles'

const HowWorkScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.welcomeContainer}>
          <Text>Como este APP Funciona ? ? ? </Text>
        </View>

      </ScrollView>
    </View>
  )
}

export default HowWorkScreen

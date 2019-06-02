import React from 'react'
import {
  ScrollView,
  Text,
  View
} from 'react-native'

import styles from '../styles'

const AboutMeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.welcomeContainer}>
          <Text>View Sobre mim, Matheus Icaro</Text>
        </View>

      </ScrollView>
    </View>
  )
}

export default AboutMeScreen

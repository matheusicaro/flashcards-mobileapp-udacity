import React from 'react'
import {
  ScrollView,
  Text,
  View,
  Button
} from 'react-native'

import { ROUTES } from '../../../navigation'
import styles from '../../styles'

export const FinishedQuiz = ({ correct, incorrect, navigate, selectedDeck }) => {
  const total = correct + incorrect

  const navigateToHome = () => {
    navigate(ROUTES.HOME.path)
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.welcomeContainer}>
          <Text>Congratulations, you complete the quiz related to the Deck { selectedDeck } </Text>
          <Text>Hits: { (correct / total) * 100}% </Text>
          <Text>Erros: { (incorrect / total) * 100}% </Text>
        </View>

        <Button
          subtitle='go to home'
          onPress={() => navigateToHome()}
        />
      </ScrollView>
    </View>
  )
}

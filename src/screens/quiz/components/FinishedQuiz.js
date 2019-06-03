import React from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from '../../styles'

export const FinishedQuiz = ({ correct, incorrect, navigate, selectedDeck }) => {
  const total = correct + incorrect

  return (
    <View style={styles.container}>

      <View style={styles.welcomeContainer}>
        <Text>Congratulations, you complete the quiz related to the Deck { selectedDeck } </Text>
        <Text>Hits: { (correct / total) * 100}% </Text>
        <Text>Erros: { (incorrect / total) * 100}% </Text>
      </View>
    </View>
  )
}

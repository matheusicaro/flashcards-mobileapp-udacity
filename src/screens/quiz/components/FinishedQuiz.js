import React from 'react'
import {
  View
} from 'react-native'
import { Text as TextTitle } from 'react-native-elements'

import { styles } from '../../../constants/Styles'

export const FinishedQuiz = ({ correct, incorrect, navigate, selectedDeck, reestartQuiz, navigateParams }) => {
  const total = correct + incorrect

  return (
    <View style={{ alignItems: 'center', ...styles.container }}>

      <View style={{ width: '80%', ...styles.welcomeContainer }}>
        <TextTitle h3 style={{ color: '#3D6DCC' }}>Congratulations!</TextTitle>
        <TextTitle h4
          style={{ textAlign: 'center', marginTop: '5%', marginBottom: '5%' }}
        >
          You complete the quiz related to the Deck { selectedDeck }
        </TextTitle>

        <TextTitle h3 style={{ color: 'green' }}>Hits: { parseFloat((correct / total) * 100).toFixed()}% </TextTitle>
        <TextTitle h3 style={{ color: 'red' }}>Errors: { parseFloat((incorrect / total) * 100).toFixed()}% </TextTitle>
      </View>

    </View>
  )
}

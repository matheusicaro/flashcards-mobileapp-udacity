import React from 'react'
import {
  ScrollView,
  Text,
  View
} from 'react-native'

import styles from '../styles'

export default class AddCardScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Text>View de nova pergunta</Text>
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Uma opção de inserir uma pergunta</Text>
            <Text style={styles.getStartedText}>Uma opção de inserir uma resposta</Text>
            <Text style={styles.getStartedText}>Uma opção de enviar a nova pergunta e assim criar um cartão</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}

import React from 'react'
import {
  ScrollView,
  Text,
  View
} from 'react-native'

import styles from '../styles'
export default class DeckScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Text>View de um baralho individual</Text>
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>* exibe o título do baralho</Text>
            <Text style={styles.getStartedText}>* exibe o número de cartões em um baralho</Text>
            <Text style={styles.getStartedText}>* exibe uma opção para começar um quiz no baralho</Text>
            <Text style={styles.getStartedText}>* uma opção de adicionar uma nova pergunta ao baralho</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}

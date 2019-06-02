import React from 'react'
import {
  ScrollView,
  Text,
  View
} from 'react-native'

import styles from '../styles'

export default class QuizScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Text>View do quiz</Text>
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>exibe a pergunta do cartão</Text>
            <Text style={styles.getStartedText}>
            uma opção de visualizar a resposta (virar o cartão) clicando em Answer
            </Text>
            <Text style={styles.getStartedText}>
            um botão "Correto" para o usuário clicar caso ele tenha acertado a questão
           de acordo com a resposta que tinha em mente
            </Text>
            <Text style={styles.getStartedText}>
            um botão "Incorreto" para o usuário clicar caso ele tenha errado a questão
           de acordo com a resposta que tinha em mente
            </Text>
            <Text style={styles.getStartedText}>o número de cartões que faltam para terminar o quiz</Text>
            <Text style={styles.getStartedText}>exibe a porcentagem correta assim que o quiz é completado</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}

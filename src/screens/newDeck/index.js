import React from 'react'

import {
  ScrollView,
  Text,
  View
} from 'react-native'

import styles from '../styles'

export default class NewDeckScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Text>View do novo baralho</Text>
          </View>

          <View style={styles.getStartedContainer}>

            <Text style={styles.getStartedText}>Uma opção de inserir o título do novo baralho</Text>
            <Text style={styles.getStartedText}>Uma opção de enviar o novo título do baralho e assim criar o baralho</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}

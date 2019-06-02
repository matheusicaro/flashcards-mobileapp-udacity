import React from 'react'
import { connect } from 'react-redux'

import {
  ScrollView,
  Text,
  View
} from 'react-native'

import styles from '../styles'

import { ROUTES } from '../../navigation'

class HomeScreen extends React.Component {
  navigate (path) {
    console.log('click', this.props)
    // this.props.navigation.navigate(path)
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Text>View da lista de baralhos (View HOME)</Text>
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>View da lista de baralhos (View padrão)</Text>
            <Text style={styles.getStartedText}>exibe o título de cada baralho</Text>
            <Text style={styles.getStartedText}>exibe o número de cartões em cada baralho</Text>
          </View>

          <View style={styles.getStartedContainer}>

            <View style={styles.getStartedContainer}>
              <Text onPress={() => this.navigate(ROUTES.ADD_CARD.path)} >VIEW -> ADD CARD</Text>
            </View>

            <View style={styles.getStartedContainer}>
              <Text onPress={() => this.navigate(ROUTES.DECK.path)} >VIEW ->  DECK</Text>
            </View>

            <View style={styles.getStartedContainer}>
              <Text onPress={() => this.navigate(ROUTES.QUIZ.path)} >VIEW ->  QUIZ</Text>
            </View>

            <View style={styles.getStartedContainer}>
              <Text onPress={() => this.navigate(ROUTES.NEW_DECK.path)} >VIEW ->  NEW DECK</Text>
            </View>

          </View>

        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({ redux: state })

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)

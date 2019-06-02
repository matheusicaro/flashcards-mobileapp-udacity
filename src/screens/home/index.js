import React from 'react'
import { connect } from 'react-redux'

import {
  ScrollView,
  Text,
  View
} from 'react-native'

import { ROUTES } from '../../navigation'
import { initialData } from './actions'

import styles from '../styles'

class HomeScreen extends React.Component {
  state = {
    activedLoading: true
  }

  navigate (path) {
    console.log('click', this.props)
    // this.props.navigation.navigate(path)
  }

  UNSAFE_componentWillMount () {
    if (this.props.decks === null) {
      this.props.dispatch(initialData)
    }
  }

  render () {
    console.log('props aqui...:', this.props.decks)

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

const mapStateToProps = ({ decks }) => ({ decks })

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)

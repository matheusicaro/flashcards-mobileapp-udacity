import React from 'react'
import { connect } from 'react-redux'

import {
  ScrollView,
  Text,
  View,
  Button
} from 'react-native'

import { initialData } from './actions'
import { ROUTES } from '../../navigation'
import { HOME } from './Constants'
import styles from '../styles'
import { Decks } from './components'

class HomeScreen extends React.Component {
  state = {
    activedLoading: true
  }

  UNSAFE_componentWillMount () {
    if (this.props.decks === null) {
      this.props.dispatch(initialData)
    }
  }

  onPressInHome (action) {
    if (action === HOME.ON_PRESS.ADD_NEW_DECK) {
      this.props.navigation.navigate(ROUTES.NEW_DECK.path)
    }
  }

  render () {
    const { decks } = this.props

    if (!decks) {
      return <Text>C A R R E G A N D O</Text>
    }

    console.log('in home', decks)

    return (
      <View style={styles.container}>

        <View style={styles.welcomeContainer}>
          <Text>View da lista de baralhos (View HOME)</Text>
        </View>

        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>View da lista de baralhos (View padrão)</Text>
          <Text style={styles.getStartedText}>exibe o título de cada baralho</Text>
          <Text style={styles.getStartedText}>exibe o número de cartões em cada baralho</Text>
        </View>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Decks itens={decks} />
        </ScrollView>

        <Button title='ADD NEW DECK' onPress={() => this.onPressInHome(HOME.ON_PRESS.ADD_NEW_DECK)} />

        <View style={styles.getStartedContainer}>

          {/* <View style={styles.getStartedContainer}>
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
          </View> */}

        </View>

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

import React from 'react'
import { connect } from 'react-redux'
import { get as getThePropertyObject } from 'lodash'

import {
  Text,
  View,
  Button
} from 'react-native'
import { Card } from 'react-native-elements'

import { DECK } from './Constants'
import { ROUTES } from '../../navigation'
import { deleteDeck } from './actions'
import { HeaderBar } from '../../components'

import styles from '../styles'

class DeckScreen extends React.Component {
  getSelectedDeck (selectedDeck, decks) {
    const { questions } = getThePropertyObject(decks, selectedDeck)
    return (questions ? questions.length : 0)
  }

  onPressInAddCardScreen (action, selectedDeck, decks) {
    const paramsToNextScreen = { selectedDeck, lastScreen: ROUTES.DECK.path }

    if (action === DECK.ON_PRESS.ADD_NEW_CARD) {
      this.props.navigation.navigate(ROUTES.ADD_CARD.path, paramsToNextScreen)
    } else if (action === DECK.ON_PRESS.START_QUIZ) {
      this.props.navigation.navigate(ROUTES.QUIZ.path, paramsToNextScreen)
    } else if (action === DECK.ON_PRESS.DELETE_CARD) {
      this.props.dispatch(deleteDeck(selectedDeck, decks))
      this.props.navigation.navigate(ROUTES.HOME.path, paramsToNextScreen)
    }
  }

  render () {
    const { decks } = this.props
    const { selectedDeck, lastScreen } = this.props.navigation.state.params

    return (
      <View style={styles.container}>

        <HeaderBar titlePage={'DECK DETAILS'} navigate={this.props.navigation.navigate} lastScreen={lastScreen} />

        <Card title={selectedDeck}>
          <Text style={{ marginBottom: 10 }}>
              Total of cards in this deck is: { this.getSelectedDeck(selectedDeck, decks) }
          </Text>
        </Card>

        <View style={styles.getStartedContainer}>

          <Button
            title='ADD CARD'
            onPress={() => this.onPressInAddCardScreen(DECK.ON_PRESS.ADD_NEW_CARD, selectedDeck)}
          />

          <Button
            title='START QUIZ'
            onPress={() => this.onPressInAddCardScreen(DECK.ON_PRESS.START_QUIZ, selectedDeck)}
          />

          <Button
            title='DELETE CARD'
            onPress={() => this.onPressInAddCardScreen(DECK.ON_PRESS.DELETE_CARD, selectedDeck, decks)}
          />

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
)(DeckScreen)

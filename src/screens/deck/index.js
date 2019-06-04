import React from 'react'
import { connect } from 'react-redux'
import { get as getThePropertyObject } from 'lodash'

import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { Card, Text as TextTitleCard, Divider } from 'react-native-elements'

import { DECK } from './constants'
import { ROUTES } from '../../navigation'
import { deleteDeck } from './actions'
import { HeaderBar } from '../../components'

import styles, { COLORS } from '../styles'

class DeckScreen extends React.Component {
  state = {
    totalQuestionInDeck: null
  }
  getSelectedDeck (selectedDeck, decks) {
    const { questions } = getThePropertyObject(decks, selectedDeck)
    const total = questions ? questions.length : 0
    this.setState({ totalQuestionInDeck: total })
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
    console.log(this.props.navigation.state.params)
    const { selectedDeck, lastScreen } = this.props.navigation.state.params
    const { totalQuestionInDeck } = this.state

    if (decks && totalQuestionInDeck === null) {
      this.getSelectedDeck(selectedDeck, decks)
    }

    return (
      <View style={styles.container}>

        <HeaderBar titlePage={'DECK DETAILS'} navigate={this.props.navigation.navigate} lastScreen={lastScreen} />

        <Card>
          <TextTitleCard h4 style={{ textAlign: 'center' }}>{ selectedDeck }</TextTitleCard>
          <Divider style={{ backgroundColor: 'blue', marginTop: '2%', marginBottom: '10%' }} />

          <Text style={{ marginBottom: 10, textAlign: 'center' }}>
              Total of cards in this deck is: ( { totalQuestionInDeck } )
          </Text>
        </Card>

        <View style={styles.getStartedContainer}>

          <TouchableOpacity
            style={{ ...styles.buttons, marginTop: '15%', backgroundColor: COLORS.BACKGROUND }}
            onPress={() => this.onPressInAddCardScreen(DECK.ON_PRESS.ADD_NEW_CARD, selectedDeck)}
          >
            <TextTitleCard h4 style={{ color: '#fff', textAlign: 'center' }}>ADD CARD</TextTitleCard>
          </TouchableOpacity>

          { !(totalQuestionInDeck === 0) &&
            <TouchableOpacity
              style={{ ...styles.buttons, marginTop: '7%', backgroundColor: 'green' }}
              onPress={() => this.onPressInAddCardScreen(DECK.ON_PRESS.START_QUIZ, selectedDeck)}
            >
              <TextTitleCard h4 style={{ color: '#fff', textAlign: 'center' }}>START QUIZ</TextTitleCard>
            </TouchableOpacity>
          }

          <TouchableOpacity
            style={{ ...styles.buttons, marginTop: '7%', backgroundColor: 'red' }}
            onPress={() => this.onPressInAddCardScreen(DECK.ON_PRESS.DELETE_CARD, selectedDeck, decks)}
          >
            <TextTitleCard h4 style={{ color: '#fff', textAlign: 'center' }}>DELETE CARD</TextTitleCard>
          </TouchableOpacity>

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

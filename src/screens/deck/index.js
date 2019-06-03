import React from 'react'
import { connect } from 'react-redux'
import { get as getThePropertyObject } from 'lodash'

import {
  ScrollView,
  Text,
  View,
  Button
} from 'react-native'
import { Card } from 'react-native-elements'

import { CARD } from './Constants'
import { ROUTES } from '../../navigation'

import styles from '../styles'

class DeckScreen extends React.Component {
  getSelectedDeck (selectedDeck, decks) {
    const { questions } = getThePropertyObject(decks, selectedDeck)
    return (questions ? questions.length : 0)
  }

  onPressInAddCardScreen (action, selectedDeck) {
    const paramsToNextScreen = { selectedDeck }

    if (action === CARD.ON_PRESS.ADD_NEW_CARD) {
      this.props.navigation.navigate(ROUTES.ADD_CARD.path, paramsToNextScreen)
    } else if (action === CARD.ON_PRESS.START_QUIZ) {
      this.props.navigation.navigate(ROUTES.QUIZ.path, paramsToNextScreen)
    }
  }

  render () {
    const { decks } = this.props
    const { selectedDeck } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <Card title={selectedDeck}>
            <Text style={{ marginBottom: 10 }}>
              Total of cards in this deck is: { this.getSelectedDeck(selectedDeck, decks) }
            </Text>
          </Card>

          <View style={styles.getStartedContainer}>

            <Button
              title='ADD CARD'
              onPress={() => this.onPressInAddCardScreen(CARD.ON_PRESS.ADD_NEW_CARD, selectedDeck)}
            />

            <Button
              title='START QUIZ'
              onPress={() => this.onPressInAddCardScreen(CARD.ON_PRESS.START_QUIZ, selectedDeck)}
            />

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
)(DeckScreen)

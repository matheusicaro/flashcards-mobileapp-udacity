import React from 'react'
import { connect } from 'react-redux'
import { get as getThePropertyObject } from 'lodash'

import {
  Text,
  View,
  Button
} from 'react-native'
import { Card, Input } from 'react-native-elements'

import { addNewCard } from './actions'
import { HeaderBar } from '../../components'

import styles from '../styles'

class AddCardScreen extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  getSelectedDeck (selectedDeck, decks) {
    const { questions } = getThePropertyObject(decks, selectedDeck)
    return (questions ? questions.length : 0)
  }

  onPressInAddCardScreen (selectedDeck) {
    const card = { ...this.state }
    this.setState({ question: '', answer: '' })
    this.props.dispatch(addNewCard(card, selectedDeck, this.props.decks))
  }

  render () {
    const { decks } = this.props
    const { selectedDeck, lastScreen, hideIconBackScreen } = this.props.navigation.state.params
    const disabledButton = (this.state.question === '' || this.state.answer === '')

    return (
      <View style={styles.container}>

        <HeaderBar
          titlePage={'ADD CARD'}
          navigate={this.props.navigation.navigate}
          lastScreen={lastScreen}
          lastScreenParams={{ selectedDeck, lastScreen }}
          hideBackScreen={hideIconBackScreen}
        />

        <Card title={selectedDeck}>
          <Text style={{ marginBottom: 10 }}>
              Total of cards in this deck is: { this.getSelectedDeck(selectedDeck, decks) }
          </Text>
        </Card>

        <View style={styles.getStartedContainer}>

          <Input
            label='QUESTION'
            placeholder={'What is the question?'}
            onChangeText={(text) => this.setState({ question: text })}
            errorStyle={{ color: 'red' }}
            value={this.state.question}
          />

          <Input
            label='ANSWER'
            placeholder={'this should be the answer.'}
            onChangeText={(text) => this.setState({ answer: text })}
            errorStyle={{ color: 'red' }}
            value={this.state.answer}
          />

          <Button
            disabled={disabledButton}
            title='ADD NEW DECK'
            onPress={() => this.onPressInAddCardScreen(selectedDeck)}
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
)(AddCardScreen)

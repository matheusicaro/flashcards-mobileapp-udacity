import React from 'react'
import { connect } from 'react-redux'

import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { Input, Text as TextButton } from 'react-native-elements'
import { HeaderBar } from '../../components'

import { ROUTES } from '../../navigation'
import { NEW_DECK } from './constants'
import { createNewDeck } from '../../utils'
import { createDeck } from './actions'

import styles, { COLORS } from '../styles'

class NewDeckScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      deckTitle: ''
    }
  }

  static navigationOptions = {
    header: null
  };

  createNewDeck () {
    const { decks } = this.props
    const keyNewDeck = this.state.deckTitle
    const newDeck = createNewDeck(keyNewDeck)
    this.props.dispatch(createDeck(newDeck, decks))
  }

  onPressInNewDeckScreen (action) {
    if (action === NEW_DECK.CREATE_DECK) {
      this.createNewDeck()
      const paramsToNextScreen = { selectedDeck: this.state.deckTitle, hideIconBackScreen: true }
      this.props.navigation.navigate(ROUTES.ADD_CARD.path, paramsToNextScreen)
    }
  }

  render () {
    const disabledButton = (this.state.deckTitle === '')
    const { lastScreen } = this.props.navigation.state.params

    return (
      <View style={styles.container}>

        <HeaderBar titlePage={'CREATE NEW DECK'} navigate={this.props.navigation.navigate} lastScreen={lastScreen} />

        <View style={styles.welcomeContainer}>
          <Text style={{ ...styles.getStartedText, marginBottom: '10%' }}>Add a title to a deck and then add cards.</Text>
        </View>

        <View style={{ ...styles.getStartedContainer, marginTop: '10%' }}>

          <Input
            label='Title of new deck'
            placeholder={'My new Deck'}
            onChangeText={(text) => this.setState({ deckTitle: text })}
            errorStyle={{ color: 'red' }}
          />

          <TouchableOpacity
            disabled={disabledButton}
            style={{ ...styles.buttons, marginTop: '15%', backgroundColor: COLORS.BACKGROUND }}
            onPress={() => this.onPressInNewDeckScreen(NEW_DECK.CREATE_DECK)}
          >
            <TextButton h4 style={{ color: '#fff', textAlign: 'center' }}>ADD NEW DECK</TextButton>
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
)(NewDeckScreen)

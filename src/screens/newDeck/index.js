import React from 'react'
import { connect } from 'react-redux'

import {
  Text,
  View,
  Button
} from 'react-native'
import { Input } from 'react-native-elements'
import { HeaderBar } from '../../components'

import { ROUTES } from '../../navigation'
import { NEW_DECK } from './Constants'
import { createNewDeck } from '../../utils'
import { createDeck } from './actions'

import styles from '../styles'

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
          <Text>View do novo baralho</Text>
        </View>

        <View style={styles.getStartedContainer}>

          <Input
            label='Title of new deck'
            placeholder={'My new Deck'}
            onChangeText={(text) => this.setState({ deckTitle: text })}
            errorStyle={{ color: 'red' }}
          />

          <Button
            disabled={disabledButton}
            title='ADD NEW DECK'
            onPress={() => this.onPressInNewDeckScreen(NEW_DECK.CREATE_DECK)}
          />

          <Text style={styles.getStartedText}>Uma opção de inserir o título do novo baralho</Text>
          <Text style={styles.getStartedText}>Uma opção de enviar o novo título do baralho e assim criar o baralho</Text>
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

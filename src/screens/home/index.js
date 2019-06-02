import React from 'react'
import { connect } from 'react-redux'

import {
  ScrollView,
  Text,
  View,
  Button
} from 'react-native'

import { Divider } from 'react-native-elements'

import { initialData } from './actions'
import { ROUTES } from '../../navigation'
import { HOME } from './Constants'
import styles from '../styles'
import { Decks } from './components'

class HomeScreen extends React.Component {
  state = {
    activedLoading: true
  }

  UNSAFE_componentWillMount () { // eslint-disable-line camelcase
    if (this.props.decks === null) {
      this.props.dispatch(initialData)
    }
  }

  onPressInHomeScreen (action, selectedDeck) {
    /* eslint-disable */
    if (action === HOME.ON_PRESS.ADD_NEW_DECK) {
      this.props.navigation.navigate(ROUTES.NEW_DECK.path)
    } 
      /* eslint-disable */
  }

  render () {
    const { decks, navigation } = this.props

    if (!decks) {
      return <Text>C A R R E G A N D O</Text>
    }

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

        <Divider style={{ backgroundColor: 'blue' }} />

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Decks itens={decks} navigate={navigation.navigate}/>
        </ScrollView>

        <Button title='ADD NEW DECK' onPress={() => this.onPressInHomeScreen(HOME.ON_PRESS.ADD_NEW_DECK)} />

        <View style={styles.getStartedContainer}>

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

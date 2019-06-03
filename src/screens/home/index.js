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
import { HeaderBar } from '../../components'

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
    if (action === HOME.ON_PRESS.ADD_NEW_DECK) {
      const paramsToNextScreen = { lastScreen: ROUTES.HOME.path }
      this.props.navigation.navigate(ROUTES.NEW_DECK.path, { paramsToNextScreen })
    }
  }

  render () {
    const { decks, navigation } = this.props

    if (!decks) {
      return <Text>C A R R E G A N D O</Text>
    }
    return (
      <View style={styles.container}>

        <HeaderBar hideAllIcons />

        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>select a deck below or create your own deck and start the quiz.</Text>
        </View>

        <Divider style={{ backgroundColor: 'blue' }} />

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Decks itens={decks} navigation={navigation} />
        </ScrollView>

        <Button title='ADD NEW DECK' onPress={() => this.onPressInHomeScreen(HOME.ON_PRESS.ADD_NEW_DECK)} />

        <View style={styles.getStartedContainer} />

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

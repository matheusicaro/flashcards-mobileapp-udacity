import React from 'react'
import { connect } from 'react-redux'
import { CirclesLoader } from 'react-native-indicator'

import {
  ScrollView,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import { Text as TextButton } from 'react-native-elements'

import { initialData } from './actions'
import { ROUTES } from '../../navigation'
import { HOME } from '../../constants'
import styles, { COLORS } from '../styles'
import { Decks } from './components'
import { HeaderBar } from '../../components'

class HomeScreen extends React.Component {
  state = {
    activedLoading: true
  }

  componentWillMount () {
    if (this.props.decks === null) {
      this.props.dispatch(initialData)
    }
  }

  onPressInHomeScreen (action, selectedDeck) {
    if (action === HOME.ON_PRESS.ADD_NEW_DECK) {
      const paramsToNextScreen = { lastScreen: ROUTES.HOME.path }
      this.props.navigation.navigate(ROUTES.NEW_DECK.path, paramsToNextScreen)
    }
  }

  render () {
    const { decks, navigation } = this.props

    if (!decks) {
      return (
        <View style={{ justifyContent: 'center', left: '45%', ...styles.container }}>
          <CirclesLoader />
        </View>
      )
    }

    return (
      <View style={styles.container}>

        <HeaderBar hideAllIcons />

        <View style={styles.getStartedContainer}>
          <Text style={{ ...styles.getStartedText, marginBottom: '5%' }}>select a deck below or create your own deck and start the quiz.</Text>
        </View>

        <ScrollView style={{ ...styles.container, maxHeight: '50%' }} contentContainerStyle={styles.contentContainer}>
          <Decks itens={decks} navigation={navigation} />
        </ScrollView>

        <TouchableOpacity
          style={{ ...styles.buttons, left: '10%', marginTop: '5%', backgroundColor: COLORS.BACKGROUND }}
          onPress={() => this.onPressInHomeScreen(HOME.ON_PRESS.ADD_NEW_DECK)}
        >
          <TextButton h4 style={{ color: '#fff', textAlign: 'center' }}>ADD NEW DECK</TextButton>
        </TouchableOpacity>

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

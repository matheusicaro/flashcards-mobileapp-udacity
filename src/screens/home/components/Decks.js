import React from 'react'
import { connect } from 'react-redux'
import { CirclesLoader } from 'react-native-indicator'

import { Ionicons } from '@expo/vector-icons'

import { Card, ListItem, Text } from 'react-native-elements'
import { ROUTES } from '../../../navigation'

export class Decks extends React.Component {
  state = {
    changeIconAndNavigate: false,
    selectBook: '',
    keySelectedCard: ''
  }

  navigate (deck) {

  }

  changeIconAndNavigate (selectBook, index, changeIconAndNavigate) {
    this.setState({ selectBook, keySelectedCard: index, changeIconAndNavigate })
  }

  getIcon (change, index) {
    return (change && this.state.keySelectedCard === index
      ? <CirclesLoader />
      : <Ionicons name='md-arrow-dropright-circle' size={32} color='#3D6DCC' />
    )
  }

  componentDidUpdate () {
    if (this.state.changeIconAndNavigate) {
      setTimeout(() => {
        const paramsToNextScreen = { selectedDeck: this.state.selectBook, lastScreen: ROUTES.HOME.path }
        this.props.navigation.navigate(ROUTES.DECK.path, paramsToNextScreen)
      }, 1500)
    }
  }

  render () {
    const itens = Object.values(this.props.itens)
    const { changeIconAndNavigate } = this.state

    return (
      <Card containerStyle={{ padding: 10 }} >
        { itens.length === 0 && (
          <Text h4 style={{ textAlign: 'center' }}>
            There are no Decks on your dashboard. Add a deck clicking below.
          </Text>
        )
        }
        {
          itens.map((item, index) => {
            const { title, questions } = item

            return (
              <ListItem
                onPress={() => this.changeIconAndNavigate(title, index, !changeIconAndNavigate)}
                key={index}
                roundAvatar
                title={title}
                subtitle={`Cards: ${questions ? questions.length : 0}`}
                rightAvatar={this.getIcon(changeIconAndNavigate, index)}
                bottomDivider={index !== itens.length - 1}
              />
            )
          })
        }
      </Card>
    )
  }
}

const mapStateToProps = ({ decks }) => ({ decks })

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Decks)

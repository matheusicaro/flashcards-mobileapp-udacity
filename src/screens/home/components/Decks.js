import React from 'react'
import { connect } from 'react-redux'

import { Ionicons } from '@expo/vector-icons'

import { Card, ListItem } from 'react-native-elements'
import { ROUTES } from '../../../navigation'

export class Decks extends React.Component {
  state = {}

  navigateToDeck (deck) {
    const paramsToNextScreen = { selectedDeck: deck }
    this.props.navigate(ROUTES.DECK.path, paramsToNextScreen)
  }

  render () {
    const itens = Object.values(this.props.itens)

    return (
      <Card containerStyle={{ padding: 10 }} >
        {
          itens.map((item, index) => {
            const { title, questions } = item

            return (
              <ListItem
                onPress={() => this.navigateToDeck(title)}
                key={index}
                roundAvatar
                title={title}
                subtitle={`Cards: ${questions ? questions.length : 0}`}
                rightAvatar={<Ionicons name='md-arrow-dropright-circle' size={32} />}
                // avatar={{ uri: u.avatar }}
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

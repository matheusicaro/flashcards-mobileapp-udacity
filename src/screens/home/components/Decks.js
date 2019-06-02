import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import { Card, ListItem } from 'react-native-elements'

export class Decks extends React.Component {
  render () {
    const itens = Object.values(this.props.itens)

    return (
      <Card containerStyle={{ padding: 10 }} >
        {
          itens.map((item, index) => {
            const { title, questions } = item
            return (
              <ListItem
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

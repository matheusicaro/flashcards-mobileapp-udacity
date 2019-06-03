import React from 'react'
import { Header } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { View, Text } from 'react-native'

import { ROUTES } from '../navigation'
import styles from '../screens/styles'

export const HeaderBar = ({
  titlePage = 'MY FLASH CARDS',
  navigate,
  lastScreen,
  hideAllIcons,
  hideHome,
  lastScreenParams = {}
}) => {
  const onPressHeader = () => {
    navigate(lastScreen, lastScreenParams)
  }

  return (
    <View style={styles.codeHighlightText}>
      <Header
        leftComponent={(hideAllIcons
          ? <Text />
          : <Ionicons name='md-arrow-back' color='white' size={32} onPress={() => onPressHeader()} />
        )}
        centerComponent={{ text: titlePage, style: { color: '#fff' } }}
        rightComponent={(hideAllIcons || hideHome
          ? <Text />
          : <Ionicons name='md-home' color='white' size={32} onPress={() => navigate(ROUTES.HOME.path)} />
        )}
      />
    </View>
  )
}

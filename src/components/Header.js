import React from 'react'
import { Header } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { View, Text } from 'react-native'
import { ROUTES } from '../navigation'

import styles from '../screens/styles'

export const HeaderBar = ({ navigate, backScreen, hideAllIcons }) => {
  const onPressHeader = (path) => {
    if (path === ROUTES.BACK_SCREEN) {
      backScreen()
    } else {
      navigate(path)
    }
  }

  return (
    <View style={styles.codeHighlightText}>
      <Header
        leftComponent={(hideAllIcons
          ? <Text />
          : <Ionicons name='md-bookmarks' size={32} onPress={() => onPressHeader(ROUTES.HOME.path)} />
        )}
        centerComponent={{ text: 'MY FLASH CARDS', style: { color: '#fff' } }}
        rightComponent={(hideAllIcons
          ? <Text />
          : <Ionicons name='md-bookmarks' size={32} onPress={() => onPressHeader(ROUTES.BACK_SCREEN)} />
        )}
      />
    </View>
  )
}

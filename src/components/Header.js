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
  hideBackScreen,
  lastScreenParams = {}
}) => {
  const onPressHeader = () => {
    navigate(lastScreen, lastScreenParams)
  }

  return (
    <View style={{ color: 'white', marginBottom: '10%' }}>
      <Header
        style={{ backgroundColor: '#3D6DCC' }}
        leftComponent={(hideAllIcons || hideBackScreen
          ? <Text />
          : <Ionicons name='md-arrow-back' color='white' size={32} onPress={() => onPressHeader()} />
        )}
        centerComponent={{ text: titlePage, style: { color: '#fff', fontSize: 20 } }}
        rightComponent={(hideAllIcons || hideHome
          ? <Text />
          : <Ionicons name='md-home' color='white' size={32} onPress={() => navigate(ROUTES.HOME.path)} />
        )}
      />
    </View>
  )
}

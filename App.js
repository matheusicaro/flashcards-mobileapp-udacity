import React from 'react'
import { Platform, StatusBar, StyleSheet, View, Animated } from 'react-native'
import { Text } from 'react-native-elements'
import { App as AppContainer } from './src'
import { setLocalNotification } from './src/utils'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    opacity: new Animated.Value(0)
  }

  componentDidMount () {
    const { opacity } = this.state
    Animated.timing(opacity, { toValue: 1, duration: 2000 }).start()
    setLocalNotification()
  }

  render () {
    if (!this.state.isLoadingComplete) {
      setTimeout(() => {
        this._handleFinishLoading()
      }, 2500)

      const { opacity } = this.state

      return (
        <View style={styles.container}>
          <Animated.Image style={[styles.image, { opacity }]} source={require('./src/assets/images/robot-prod.png')} />
          <Text h4 style={styles.text}>Welcome to FlashCards an application for Udacity course</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
          <AppContainer />
        </View>
      )
    }
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign:'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  image:{ left: '40%' },
  text:{
    textAlign:'center',
    marginTop: '5%'
  }
})

import React from 'react'
import { Platform, StatusBar, StyleSheet, View, Text, Animated } from 'react-native'
import { App as AppContainer } from './src'
import { setLocalNotification } from './src/utils'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    opacity: new Animated.Value(0)
  }

  componentDidMount () {
    const { opacity } = this.state
    Animated.timing(opacity, { toValue: 1, duration: 1500 }).start()
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
          <Animated.Image style={[{ opacity }]} source={require('./src/assets/images/robot-prod.png')} />
          <Text style={styles.getStartedText}>Welcome to FlashCards an application for Udacity course</Text>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})

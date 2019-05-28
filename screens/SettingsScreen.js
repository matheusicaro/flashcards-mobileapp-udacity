import React from 'react';
// import { ExpoConfigView } from '@expo/samples';
import {
  ScrollView,
  View,
  Text
} from 'react-native';

import { styles } from '../constants'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Configurações',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
              <Text style={styles.tabBarInfoText}>Tela de configuração</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

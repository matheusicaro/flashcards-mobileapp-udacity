import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'StudyCard:notifications'

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelScheduledNotificationAsync)
}

export const createNotification = () => {
  return {
    title: 'Lets study today',
    body: `don't forget to study yours decks today.`,
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export const setLocalNotification = () => {
  AsyncStorage.getAllKeys().then(data => {
    if (!data.includes(NOTIFICATION_KEY)) {
      Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync()

            const schedule = { repeat: 'hour', time: new Date().getTime() + 10000 }

            Notifications.scheduleLocalNotificationAsync(createNotification(), schedule)

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          }
        })
    }
  })
}

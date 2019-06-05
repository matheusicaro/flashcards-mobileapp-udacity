import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'StudyCard:notifications'

export const clearLocalNotification = async () => {
  await AsyncStorage.removeItem(NOTIFICATION_KEY)
  const response = await Notifications.cancelAllScheduledNotificationsAsync()
  return response
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

export const setLocalNotification = async () => {
  const data = await AsyncStorage.getItem(NOTIFICATION_KEY)
  const isNotificationSet = JSON.parse(data)

  if (isNotificationSet === null) {
    const info = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    const { status } = info

    if (status === 'granted') {
      await Notifications.cancelAllScheduledNotificationsAsync()

      let tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(20)
      tomorrow.setMinutes(0)

      Notifications.scheduleLocalNotificationAsync(createNotification(), {
        time: tomorrow,
        repeat: 'day'
      })

      AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
    }
  }
}

export const existNotification = async () => {
  const data = await AsyncStorage.getItem(NOTIFICATION_KEY)
  const notification = JSON.parse(data)
  return notification
}

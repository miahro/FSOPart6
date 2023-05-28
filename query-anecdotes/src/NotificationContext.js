import { createContext, useReducer, useContext } from 'react'

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SHOW":
      console.log(action.payload.message)
      return action.payload.message
    case "HIDE":
      return ''
    default:
      return state
  }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, '')

    return (
      <NotificationContext.Provider value ={[notification, notificationDispatch]}>
        {props.children}
      </NotificationContext.Provider>
    )
}

export const useNotificationMessage = () => {
    const context = useContext(NotificationContext)
    return context[0]
}
  
export const useNotificationDispatch = () => {
    const context = useContext(NotificationContext)
    return context[1]
}

  export default NotificationContext
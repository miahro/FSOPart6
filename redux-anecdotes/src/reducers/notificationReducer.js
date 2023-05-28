import { createSlice } from '@reduxjs/toolkit'

//this initial value is bit unnecessary, but left it to comply with 6.12
const initialNotification = 'Initial value of notification'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: initialNotification,
  reducers: {
    hideNotification(state, action) {
      console.log('Notification hide with state and action', state, action)
      return ''
    },
    showNotification(state,action) {
      console.log('Notification show with state and action, ', state, action)
      return action.payload
    }
  }
})

export const { hideNotification, showNotification } = notificationSlice.actions
export default notificationSlice.reducer

export const setNotification = (message, time) => {
  return async dispatch => {
    dispatch(showNotification(message))
    setTimeout(() => dispatch(hideNotification()), time*1000)
  }
}
import { createSlice } from '@reduxjs/toolkit'

const initialNotification = 'Initial value of notification'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: initialNotification,
  reducers: {
    notificationChange(state, action) {
      console.log('notification reducer with state and action', state, action)
      return state
    }
  }
})

export const { notificationChange } = notificationSlice.actions
export default notificationSlice.reducer
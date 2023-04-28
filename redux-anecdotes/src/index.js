import React from 'react'
import ReactDOM from 'react-dom/client'
//import { configureStore } from '@reduxjs/toolkit'
//import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
//import filterReducer from './reducers/filterReducer'
//import { filterSlice.reducer } from '.reducers/filterReducer'
//import anecdoteReducer from './reducers/anecdoteReducer'

import store from './store.js'

// const reducer = combineReducers({
//   anecdotes: anecdoteReducer,
//   filter: filterReducer
// })

// const store = createStore(reducer)

// const store = configureStore({
//   reducer: {
//     anecdotes: anecdoteReducer,
//     //filter: filterReducer
//     filter: filterReducer
//   }
// })

console.log('in index.js store state', store.getState())



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
//import anecdoteService from './services/anecdotes'
//import { setAnecdotes } from './reducers/anecdoteReducer'

import store from './store.js'



console.log('in index.js store state', store.getState())

// anecdoteService.getAll().then(anecdotes =>
//   store.dispatch(setAnecdotes(anecdotes))
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
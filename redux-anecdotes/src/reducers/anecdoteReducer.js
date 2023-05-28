import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    voteAnecdote(state, action){
      console.log('anecdote reducer')
      const id = action.payload
      const anecdoteToVote = state.find(anecdote => anecdote.id===id)
      const votedAnecdote = { ...anecdoteToVote }
      votedAnecdote.votes=anecdoteToVote.votes+1
      return state.map(anecdote => anecdote.id !== id ? anecdote: votedAnecdote)
    },
    newAnecdote(state, action){
      console.log('in anecdote reducer action.payload.content', action.payload)
      const addedAnecdote = action.payload
      //state = [...state, addedAnecdote]
      state.push(addedAnecdote)
      //return state.map(anecdote => anecdote.id !== addedAnecdote.id ? anecdote: addedAnecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const createdAnecdote = await anecdoteService.createNew(content)
    dispatch(newAnecdote(createdAnecdote))
  }
}

export const voteId = id => {
  return async dispatch => {
    const votedAnedote = await anecdoteService.updateVote(id)
    console.log(votedAnedote)
    dispatch(voteAnecdote(id))
  }
}

export const { voteAnecdote, newAnecdote, setAnecdotes } =  anecdoteSlice.actions
export default anecdoteSlice.reducer


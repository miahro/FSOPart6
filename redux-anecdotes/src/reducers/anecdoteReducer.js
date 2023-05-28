import { createSlice } from '@reduxjs/toolkit'

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

//const initialState = anecdotesAtStart.map(asObject)

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
      //const addedAnecdote =asObject(action.payload)
      const addedAnecdote = action.payload
      state = [...state, addedAnecdote]
      //state.push(addedAnecdote)
      return state.map(anecdote => anecdote.id !== addedAnecdote.id ? anecdote: addedAnecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { voteAnecdote, newAnecdote, setAnecdotes } =  anecdoteSlice.actions
export default anecdoteSlice.reducer


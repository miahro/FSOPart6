import { useEffect } from 'react'
import NewAnecdote from './components/NewAnecdote'
import AnacdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import anecdoteService from './services/anecdotes'
import { useDispatch } from 'react-redux'
//import anecdotes from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [])

  return (
    <div>
      <Notification/>
      <h2>Anecdotes</h2>
      <Filter/>
      <AnacdoteList/>
      <NewAnecdote/>
    </div>
  )
}

export default App
import NewAnecdote from './components/NewAnecdote'
import AnacdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {

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
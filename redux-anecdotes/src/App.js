import NewAnecdote from './components/NewAnecdote'
import AnacdoteList from './components/AnecdoteList'
import Filter from './components/Filter'

const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter/>
      <AnacdoteList/>
      <NewAnecdote/>
    </div>
  )
}

export default App
import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'

const NewAnecdote = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(newAnecdote(content))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" required/></div>
        <button type="sumbit">create</button>
     </form>
    </div>  
  )
}

export default NewAnecdote
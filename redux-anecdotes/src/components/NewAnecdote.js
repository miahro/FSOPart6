import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
//import anecdoteService from '../services/anecdotes'

const NewAnecdote = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    //console.log('module NewAnecdote calling dispatch newAnecdote reducers with content', content)
    //const newAn = await anecdoteService.createNew(content)
    //console.log('in addAnnecdote newAn', newAn)
    //dispatch(newAnecdote(newAn))
    //dispatch(newAnecdote(newAn))
    dispatch(createAnecdote(content))
    dispatch(setNotification(`you added new anecdote '${content}'`))

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
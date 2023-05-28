import { useMutation, useQueryClient } from 'react-query'
import { createAnecdote } from '../requests'
import { useNotificationDispatch } from '../NotificationContext'

const AnecdoteForm = () => {
  
  const queryClient = useQueryClient()

  const dispatch = useNotificationDispatch()

  const newAnecdoteMuatation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData('anecdotes')
      queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
      
    }
  })
 


  const onCreate = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote:', content)
    newAnecdoteMuatation.mutate( {content, votes:0})
    dispatch( {
      type: 'SHOW',
      payload: {
        message: `anecdote '${content}' added`
      }
    })
    setTimeout(() => {
      dispatch({ type: 'HIDE' })
    }, 5000)
    
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm

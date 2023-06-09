import { useDispatch, useSelector } from 'react-redux'
import { voteId } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const anecdotesToSort = [...anecdotes]
  console.log('Component Anecdote list: ',anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteId(id))
    const votedAnecdote = anecdotes.filter( anecdote => anecdote.id ===id)
    console.log('voted anecdote', votedAnecdote[0].content)
    dispatch(setNotification(`you voted for '${votedAnecdote[0].content}'`, 3))
  }

  const anecdotesToShow =
    <div>
      {anecdotesToSort.sort((a,b) => b.votes - a.votes)
        .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
          has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
    </div>

  return (
    <div>
      <div>
        {anecdotesToShow}
      </div>
    </div>
  )
}

export default AnecdoteList
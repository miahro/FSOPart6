import { useDispatch, useSelector } from 'react-redux'
import { voteId } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteId(id))
  }

  const anecdotesToShow =
    <div>
      {anecdotes.sort((a,b) => b.votes - a.votes)
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
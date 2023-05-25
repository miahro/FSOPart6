import { useDispatch, useSelector } from 'react-redux'
//import { voteId } from '../reducers/anecdoteReducer'
//import anecdoteReducer  from '../reducers/anecdoteReducer'
import { voteAnecdote } from '../reducers/anecdoteReducer'
//import { newAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  console.log('AnecdoteList')
  const anecdotes = useSelector(state => state.anecdotes)
  const anecdotesToSort = [...anecdotes]
  console.log(anecdotes)
  console.log(typeof anecdotes)
  const filter = useSelector(state => state.filter)
  console.log('filter: ', filter)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteAnecdote(id))
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

  //console.log('Anecdotes to Show: ',anecdotesToShow)
  return (
    <div>
      <div>
        {anecdotesToShow}
      </div>
    </div>
  )
}

export default AnecdoteList
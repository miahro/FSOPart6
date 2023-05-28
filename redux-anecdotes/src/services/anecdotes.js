import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const updateVote = async (id) => {
  const targetAnecdote = await(axios.get(`${baseUrl}/${id}`))
  console.log('id, target', id, targetAnecdote)
  const response = await axios.put(`${baseUrl}/${id}`,{
    ...targetAnecdote.data,
    votes: targetAnecdote.data.votes+1
  })
  return response
}

export default { getAll, createNew, updateVote }
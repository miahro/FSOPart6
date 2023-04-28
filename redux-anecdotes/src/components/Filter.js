import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    console.log('in component Filter handleChange called with event.target.value', event.target.value)
    event.preventDefault()
    dispatch(filterChange(event.target.value))
    // input-field value is in variable event.target.value
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} name='filter'/>
    </div>
  )
}

export default Filter
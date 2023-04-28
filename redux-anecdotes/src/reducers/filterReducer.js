import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange(state, action) {
      console.log('reducer')
      const newFilter = action.payload
      state = newFilter
      return state
    }
  }
})

export const  { filterReducer, filterChange }  = filterSlice.actions
export default filterSlice.reducer
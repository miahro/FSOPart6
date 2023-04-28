import { createSlice } from '@reduxjs/toolkit'

//const initialFilter = ''

// const filterReducer = (state = initialFilter, action) => {
//   switch (action.type) {
//   case 'SET_FILTER':
//     return action.payload
//   default:
//     return state
//   }
// }

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
// switch (action.type) {
// case 'SET_FILTER':
//   return action.payload
// default:
//   return state
// }
//  }
// },
// filterChange(filter) {
//   console.log('filterChange called with param filter:', filter)
//   return {
//     type: 'SET_FILTER',
//     payload: filter
//   }
// }
// }})


// export const filterChange = filter => {
//   return {
//     type: 'SET_FILTER',
//     payload: filter
//   }
// }



export const  { filterReducer, filterChange }  = filterSlice.actions
// export default filterReducer
export default filterSlice.reducer
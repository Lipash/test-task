import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface FilterState {
  minRating: number | null
  maxRating: number | null
  sortOrder: 'low' | 'high' | null
}

const initialState: FilterState = {
  minRating: null,
  maxRating: null,
  sortOrder: null,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<Partial<FilterState> & { reset?: boolean }>
    ) => {
      if (action.payload.reset) {
        Object.assign(state, initialState)
      } else {
        Object.assign(state, action.payload)
      }
    },
  },
})

export const { setFilter } = filterSlice.actions
export const selectFilter = (state: RootState) => state.filter
export default filterSlice.reducer

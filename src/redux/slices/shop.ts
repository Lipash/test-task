import { createSlice } from '@reduxjs/toolkit'

const shopSlice = createSlice({
  name: 'shop',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state = action.payload
    },
  },
})

export const {} = shopSlice.actions
export default shopSlice.reducer

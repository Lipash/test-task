import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Item {
  id: number
  title: string
  price: number
}

interface ShopState {
  items: Item[]
  fullPrice: number
}

const initialState: ShopState = {
  items: [],
  fullPrice: 0,
}

function toFixed(num: number, size: number) {
  return Math.round(num * Math.pow(10, size)) / Math.pow(10, size)
}

let itemId = 0

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<Item, 'id'>>) => {
      state.items.push({ ...action.payload, id: itemId++ })
      state.fullPrice = toFixed(state.fullPrice + action.payload.price, 2)
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload)
      if (index !== -1) {
        state.fullPrice = toFixed(state.fullPrice - state.items[index].price, 2)
        state.items.splice(index, 1)
      }
    },
  },
})

export const { addItem, deleteItem } = shopSlice.actions
export default shopSlice.reducer

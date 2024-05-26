import { createSlice } from '@reduxjs/toolkit'
import { Game, Platform } from '../../api/interfaces'

interface GamesState {
  originalGames: Game[]
  sortedGames: Game[]
}

const initialState: GamesState = {
  originalGames: [],
  sortedGames: [],
}

const sortGamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setOriginalGamesRedux: (state, action) => {
      state.originalGames = action.payload
      state.sortedGames = action.payload
    },
    sortByPlatform: (state, action) => {
      state.sortedGames = state.originalGames.filter((game: Game) =>
        game.platform.includes(action.payload as Platform)
      )
    },
    sortBySubsLang: (state, action) => {
      state.sortedGames = state.originalGames.filter((game: Game) =>
        game.subtitlesLang.includes(action.payload as string)
      )
    },
    sortByDubsLang: (state, action) => {
      state.sortedGames = state.originalGames.filter((game: Game) =>
        game.dubbingLang.includes(action.payload as string)
      )
    },
    sortByIsOnline: (state, action) => {
      state.sortedGames = state.originalGames.filter(
        (game: Game) => game.isConnection === action.payload
      )
    },
    sortByRatingLow: (state) => {
      state.sortedGames = [...state.sortedGames].sort(
        (a: Game, b: Game) => a.rating - b.rating
      )
    },
    sortByRatingHigh: (state) => {
      state.sortedGames = [...state.sortedGames].sort(
        (a: Game, b: Game) => b.rating - a.rating
      )
    },
    resetGames: (state) => {
      state.sortedGames = state.originalGames
    },
  },
})

export const {
  setOriginalGamesRedux,
  sortByPlatform,
  sortBySubsLang,
  sortByDubsLang,
  sortByIsOnline,
  sortByRatingLow,
  sortByRatingHigh,
  resetGames,
} = sortGamesSlice.actions

export default sortGamesSlice.reducer

export enum Platform {
  PC = 'pc',
  Xbox = 'xbox',
  Ps = 'ps',
}

export type SortType =
  | 'platform'
  | 'subsLang'
  | 'dubsLang'
  | 'isOnline'
  | 'ratingLow'
  | 'ratingHigh'

export interface SortState {
  type: SortType
  value: Platform | 'russian' | 'Russian' | boolean
}

export interface Game {
  id: number
  name: string
  cover: string
  rating: number
  platform: Platform[]
  maxOnline?: number
  isConnection: boolean
  subtitlesLang: string
  dubbingLang: string
  price: string | null
}

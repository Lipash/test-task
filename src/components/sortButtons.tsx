import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import {
  resetGames,
  sortByDubsLang,
  sortByIsOnline,
  sortByPlatform,
  sortByRatingHigh,
  sortByRatingLow,
  sortBySubsLang,
} from '../redux/slices/sortGamesSlice'

export default function SortButtons() {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div className="flex gap-3">
      Sort by:
      <button onClick={() => dispatch(sortByPlatform('pc'))}>PC</button>
      <button onClick={() => dispatch(sortByPlatform('ps'))}>Ps</button>
      <button onClick={() => dispatch(sortByPlatform('xbox'))}>Xbox</button>
      <button onClick={() => dispatch(sortBySubsLang('russian'))}>Subs</button>
      <button onClick={() => dispatch(sortByDubsLang('Russian'))}>Dubs</button>
      <button onClick={() => dispatch(sortByIsOnline(true))}>Online</button>
      <button onClick={() => dispatch(sortByIsOnline(false))}>
        Solo Games
      </button>
      <button onClick={() => dispatch(sortByRatingLow())}>Up</button>
      <button onClick={() => dispatch(sortByRatingHigh())}>Down</button>
      <button onClick={() => dispatch(resetGames())}>Reset</button>
    </div>
  )
}

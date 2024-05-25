import { useEffect } from 'react'
import { Game } from '../api/interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { setOriginalGamesRedux } from '../redux/slices/sortGamesSlice'
import { AppDispatch, RootState } from '../redux/store'

export default function gameList() {
  const dispatch = useDispatch<AppDispatch>()

  const getApiData = async () => {
    const response = await fetch('http://localhost:3000/games').then(
      (response) => response.json()
    )
    dispatch(setOriginalGamesRedux(response))
  }

  useEffect(() => {
    getApiData()
  }, [])

  const originalGamesRedux = useSelector(
    (state: RootState) => state.sortGames.sortedGames
  )

  return (
    <>
      <div className="justify-center flex text-center font-medium text-lg place-content-center">
        <div className="grid grid-cols-5 gap-4">
          {originalGamesRedux.map((game: Game) => (
            <div
              key={game.name + game.id}
              className="max-w-xs flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-4xl md:text-3xl lg:text-4xl xl:text-3xl">
                  {game.name}
                </h3>
                <div className="flex max-w-96">
                  <img className="" src={game.cover} alt={game.name} />
                </div>
              </div>
              <p>Рейтинг: {game.rating}</p>
              <p>Платформы: {game.platform.join(', ')}</p>
              {game.isConnection ? (
                <>
                  <p>Есть онлайн режим</p>
                  <p>Макс. онлайн: {game.maxOnline}</p>
                </>
              ) : (
                <>Для одного игрока</>
              )}
              <p>Субтитры: {game.subtitlesLang}</p>
              <p>Дубляж: {game.dubbingLang}</p>
              {game.price ? <p>Цена:{game.price}</p> : <p>Free2Play</p>}
              <button className="bg-green-700">Купить</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

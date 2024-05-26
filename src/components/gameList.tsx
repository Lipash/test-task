import { Game } from '../api/interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { addItem } from '../redux/slices/shop'

export default function gameList() {
  const originalGamesRedux = useSelector(
    (state: RootState) => state.sortGames.sortedGames
  )

  const dispatch = useDispatch()

  const handleButtonClick = (gameTitle: string, gamePrice: string | null) => {
    const price = gamePrice ? parseFloat(gamePrice.replace('$', '')) : 0
    dispatch(addItem({ title: gameTitle, price: price }))
  }

  return (
    <>
      <div className="justify-center flex text-center font-medium text-lg place-content-center">
        <div className="grid grid-cols-5 gap-4">
          {originalGamesRedux.map((game: Game) => (
            <div
              key={`${game.name}_${game.id}`}
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
              <button
                className="bg-green-700"
                onClick={() => handleButtonClick(game.name, game.price)}
              >
                Купить
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

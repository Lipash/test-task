import { useEffect, useState } from 'react'
import { Game } from '../api/interfaces'
import quickSort from '../features/quickSort'

export default function gameList() {
  const [games, setGames] = useState<Game[]>([])

  const getApiData = async () => {
    const response = await fetch(
      'https://66366fa9415f4e1a5e276190.mockapi.io/games'
    ).then((response) => response.json())

    setGames(response)
  }

  useEffect(() => {
    getApiData()
  }, [])

  const sortByRatingFromLow = () =>
    quickSort(games, (gameA, gameB) => gameA.rating - gameB.rating)

  const sortByRatingFromHigh = () =>
    quickSort(games, (gameA, gameB) => gameB.rating - gameA.rating)

  const sortByPlatform = () => {}

  const sortBySubsLang = () => {}

  const sortByDubsLang = () => {}

  const sortByIsOnline = () => {}

  return (
    <>
      <div className="col-span-12 row-span-1 justify-center flex gap-10 text-3xl pb-20 items-center text-center">
        Sort by:
        <button onClick={() => console.log(sortByRatingFromHigh(games))}>
          Up
        </button>
        <button onClick={() => console.log(sortByRatingFromLow(games))}>
          Down
        </button>
        <button onClick={() => console.log(2)}>PC</button>
        <button onClick={() => console.log(3)}>Ps</button>
        <button onClick={() => console.log(4)}>Xbox</button>
        <button onClick={() => console.log(5)}>Subs</button>
        <button onClick={() => console.log(6)}>Dubs</button>
        <button onClick={() => console.log(7)}>Online</button>
        <button onClick={() => console.log(8)}>Solo Games</button>
        <button onClick={() => console.log(9)}>reset</button>
      </div>
      <div className="justify-center flex text-center font-medium text-lg place-content-center">
        <div className="grid grid-cols-5 gap-4">
          {games.map((game: Game) => (
            <div key={game.name} className="max-w-xs">
              <h3 className="font-semibold text-4xl md:text-3xl lg:text-4xl xl:text-3xl">
                {game.name}
              </h3>
              <div className="flex max-w-96">
                <img className="" src={game.cover} alt={game.name} />
              </div>
              <p>Рейтинг: {game.rating}</p>
              <p>Платформы: {game.platform.join(', ')}</p>
              {game.connection && (
                <>
                  <p>Есть онлайн режим</p>
                  <p>Макс. онлайн: {game.maxOnline}</p>
                </>
              )}
              <p>Субтитры: {game.subtitlesLang}</p>
              <p>Дубляж: {game.dubbingLang}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

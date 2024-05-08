import { useEffect, useState } from 'react'
import { Game, Platform, SortType } from '../api/interfaces'

export default function gameList() {
  const [sortedGames, setsortedGames] = useState<Game[]>([])
  const [originalGames, setOriginalGames] = useState<Game[]>([])
  const [sortState, setSortState] = useState({ type: '', value: '' })
  console.log(sortState.type, sortState.value)

  const getApiData = async () => {
    const response = await fetch(
      'https://66366fa9415f4e1a5e276190.mockapi.io/games'
    ).then((response) => response.json())

    setsortedGames(response)
    setOriginalGames(response)
  }

  useEffect(() => {
    getApiData()
  }, [])

  const sortGames = (type: SortType, value: Platform | string | boolean) => {
    let sortedGames: Game[]

    switch (type) {
      case 'platform':
        sortedGames = originalGames.filter((game: Game) =>
          game.platform.includes(value as Platform)
        )
        break
      case 'subsLang':
        sortedGames = originalGames.filter((game: Game) =>
          game.subtitlesLang.includes(value as string)
        )
        break
      case 'dubsLang':
        sortedGames = originalGames.filter((game: Game) =>
          game.dubbingLang.includes(value as string)
        )
        break
      case 'isOnline':
        sortedGames = originalGames.filter(
          (game: Game) => game.isConnection === value
        )
        break
      case 'ratingLow':
        sortedGames = [...originalGames].sort(
          (a: Game, b: Game) => a.rating - b.rating
        )
        break
      case 'ratingHigh':
        sortedGames = [...originalGames].sort(
          (a: Game, b: Game) => b.rating - a.rating
        )
        break
      default:
        sortedGames = originalGames
    }

    setsortedGames(sortedGames)
  }

  return (
    <>
      {/* <div className="col-span-12 row-span-1 justify-center flex gap-10 text-3xl pb-20 items-center text-center">
        Sort by:
        <button onClick={() => sortGames('ratingLow', true)}>Up</button>
        <button onClick={() => sortGames('ratingHigh', true)}>Down</button>
        <button onClick={() => sortGames('platform', Platform.PC)}>PC</button>
        <button onClick={() => sortGames('platform', Platform.Ps)}>Ps</button>
        <button onClick={() => sortGames('platform', Platform.Xbox)}>
          Xbox
        </button>
        <button onClick={() => sortGames('subsLang', 'russian')}>Subs</button>
        <button onClick={() => sortGames('dubsLang', 'Russian')}>Dubs</button>
        <button onClick={() => sortGames('isOnline', true)}>Online</button>
        <button onClick={() => sortGames('isOnline', false)}>Solo Games</button>
        <button onClick={() => setsortedGames(originalGames)}>reset</button>
      </div> */}
      <div className="justify-center flex text-center font-medium text-lg place-content-center">
        <div className="grid grid-cols-5 gap-4">
          {sortedGames.map((game: Game) => (
            <div key={game.name + game.id} className="max-w-xs">
              <h3 className="font-semibold text-4xl md:text-3xl lg:text-4xl xl:text-3xl">
                {game.name}
              </h3>
              <div className="flex max-w-96">
                <img className="" src={game.cover} alt={game.name} />
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
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

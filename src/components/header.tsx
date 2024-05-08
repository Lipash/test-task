export default function Header() {
  return (
    <div className="col-span-12 row-span-1 justify-center flex gap-10 text-3xl pb-20 items-center text-center">
      Sort by:
      <button onClick={() => sortGames('ratingLow', true)}>Up</button>
      <button onClick={() => sortGames('ratingHigh', true)}>Down</button>
      <button onClick={() => sortGames('platform', Platform.PC)}>PC</button>
      <button onClick={() => sortGames('platform', Platform.Ps)}>Ps</button>
      <button onClick={() => sortGames('platform', Platform.Xbox)}>Xbox</button>
      <button onClick={() => sortGames('subsLang', 'russian')}>Subs</button>
      <button onClick={() => sortGames('dubsLang', 'Russian')}>Dubs</button>
      <button onClick={() => sortGames('isOnline', true)}>Online</button>
      <button onClick={() => sortGames('isOnline', false)}>Solo Games</button>
      <button onClick={() => setsortedGames(originalGames)}>reset</button>
    </div>
  )
}

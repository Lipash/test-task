import GameList from './components/gameList'
import Header from './components/header'

const App: React.FC = () => {
  return (
    <div className="grid grid-rows-12 grid-cols-12 min-h-screen max-h-screen bg-[#000000] text-white">
      <Header />
      <div className="col-span-12 row-span-11 ">
        <GameList />
      </div>
    </div>
  )
}

export default App

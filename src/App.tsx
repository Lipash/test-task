import { SortProvider } from './hooks/useSort'
import GameListSlider from './components/gameListSlider'
import Header from './components/header'

const App: React.FC = () => {
  return (
    <SortProvider>
      <div className="grid grid-rows-12 grid-cols-12 bg-yellow-300 min-h-screen">
        <Header />
        <div className="col-span-12 row-span-10 justify-center flex bg-red-400">
          <GameListSlider />
        </div>
        <h1 className="col-span-12 row-span-1 bg-pink-500 flex justify-center items-center text-2xl">
          &copy;2024 OTTER DEVELOPMENT
        </h1>
      </div>
    </SortProvider>
  )
}

export default App

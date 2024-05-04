import { SortProvider } from './hooks/useSort'
import GameListSlider from './components/gameListSlider'
import Header from './components/header'

const App: React.FC = () => {
  return (
    <SortProvider>
      <div className="grid grid-rows-12 grid-cols-12  min-h-screen max-h-full bg-[#000000] text-white">
        <Header />
        <div className="col-span-12 row-span-10 justify-center flex ">
          <GameListSlider />
        </div>
      </div>
    </SortProvider>
  )
}

export default App

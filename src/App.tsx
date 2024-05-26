import { useDispatch } from 'react-redux'
import GameList from './components/gameList'
import Header from './components/header'
import { AppDispatch } from './redux/store'
import { setOriginalGamesRedux } from './redux/slices/sortGamesSlice'
import { useEffect } from 'react'
import axios from 'axios'

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const getApiData = async () => {
    const response = await axios.get('http://localhost:3000/games')
    dispatch(setOriginalGamesRedux(response.data))
  }
  useEffect(() => {
    getApiData()
  }, [])

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

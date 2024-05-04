import { useSort } from '../hooks/useSort'
import { Platform } from '../api/GameList'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import { FaArrowAltCircleDown } from 'react-icons/fa'
import { RiXboxLine } from 'react-icons/ri'
import { FaPlaystation } from 'react-icons/fa6'
import { RxReset } from 'react-icons/rx'
import { GiAmericanFootballPlayer } from 'react-icons/gi'
import { GiBabyfootPlayers } from 'react-icons/gi'

const Header: React.FC = () => {
  const { setSortByRating, resetSort, setPlatformFilter, setIsOnline } =
    useSort()

  return (
    <div className="flex gap-10 col-span-12 row-span-1 justify-center text-center items-center text-4xl">
      Sort by:
      <button
        onClick={() => setSortByRating('fromHighRating')}
        className="flex flex-row items-center"
      >
        Rating: <FaArrowAltCircleDown size={30} />
      </button>
      <button
        onClick={() => setSortByRating('fromLowRating')}
        className="flex flex-row items-center"
      >
        Rating <FaArrowAltCircleUp size={30} />
      </button>
      <button onClick={() => setPlatformFilter([Platform.PC])}>PC</button>
      <button onClick={() => setPlatformFilter([Platform.Xbox])}>
        <RiXboxLine size={50} />
      </button>
      <button onClick={() => setPlatformFilter([Platform.Ps])}>
        <FaPlaystation size={50} />
      </button>
      <button onClick={() => setIsOnline('Single player')}>
        <GiAmericanFootballPlayer size={50} />
      </button>
      <button
        onClick={() => setIsOnline('Internet')}
        className="flex flex-row items-center"
      >
        <GiBabyfootPlayers size={50} />
      </button>
      <button onClick={resetSort}>
        <RxReset size={50} />
      </button>
    </div>
  )
}

export default Header

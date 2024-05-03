import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { games, Game } from '../api/GameList'
import { useSort } from '../hooks/useSort'

interface ArrowProps {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  )
}

export default function GameListSlider() {
  const { sortBy, platformFilter } = useSort() // Получаем текущий фильтр по платформе из контекста

  const sortedGames = Object.values(games)
    .filter((game: Game) => {
      if (platformFilter === null) {
        return true
      } else {
        return game.platform === platformFilter
      }
    })
    .sort((a: Game, b: Game) => {
      if (sortBy === 'high') {
        return b.rating - a.rating
      } else if (sortBy === 'low') {
        return a.rating - b.rating
      } else {
        return 0
      }
    })

  const settings = {
    dots: false,
    infinite: true,
    draggable: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="bg-blue-500 h-5/6 w-5/6">
      <Slider {...settings}>
        {sortedGames.map((game) => (
          <div
            key={game.name}
            className="flex text-center font-medium text-base"
          >
            <h3 className=" font-semibold text-2xl">{game.name}</h3>
            <img
              className="max-h-[700px] min-h-[700px]"
              src={game.cover}
              alt={game.name}
              style={{ width: '100%', height: 'auto' }}
            />
            <p>Рейтинг: {game.rating}</p>
            <p>Платформа: {game.platform}</p>
            {game.connection && (
              <>
                <p>Соединение: {game.connection}</p>
                <p>Макс. онлайн: {game.maxOnline}</p>
              </>
            )}
            <p>Субтитры: {game.subtitles}</p>
            <p>Дубляж: {game.dubbing}</p>
            {game.offline === 'Single player' && <p>Для одного игрока</p>}
          </div>
        ))}
      </Slider>
    </div>
  )
}

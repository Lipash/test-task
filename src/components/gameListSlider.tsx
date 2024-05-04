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
      style={{ ...style, display: 'block', background: '#000000' }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#000000' }}
      onClick={onClick}
    />
  )
}

export default function GameListSlider() {
  const { sortBy, platformFilter, isOnline } = useSort()

  const sortedGamesByPlatformAndRating = games
    .filter((game) => {
      if (!platformFilter) {
        return true
      }
      return platformFilter.some((filter) => game.platform.includes(filter))
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
    infinite: false,
    draggable: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 636,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className=" w-5/6 justify-center items-center self-center text-center font-medium text-lg">
      <Slider {...settings}>
        {sortedGamesByPlatformAndRating.map((game: Game) => (
          <div key={game.name}>
            <h3 className="font-semibold text-4xl md:text-3xl lg:text-4xl xl:text-3xl">
              {game.name}
            </h3>
            <div className="flex justify-center">
              <img
                className="max-h-[500px] min-h-[500px] min-w-4/6 md:min-h-[600px] lg:min-h-[700px] lg:min-w-[427px]  xl:min-h-[600px] xl:min-w-[365px]  2xl:min-h-[700px] 2xl:min-w-[427px]"
                src={game.cover}
                alt={game.name}
              />
            </div>
            <p>Рейтинг: {game.rating}</p>
            <p>Платформы: {game.platform.join(', ')}</p>
            {game.connection && (
              <>
                <p>Есть онлайн режим</p>
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

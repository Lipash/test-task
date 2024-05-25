import { useState } from 'react'
import Modal from './modal'

function ShopModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className=" bg-buttonOrangeGradient dark:bg-darkButtonOrangeGradient m-[10px] px-10 py-5 text-center uppercase transi duration-500 bg-auto text-white shadow-lg block rounded-xl"
      >
        SHOP
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h1>sadasdas</h1>
        {/* {originalGamesRedux.map((game: Game) => (
            <div
              key={game.name + game.id}
              className="max-w-xs flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-4xl md:text-3xl lg:text-4xl xl:text-3xl">
                  {game.name}
                </h3>
              {game.price ? <p>Цена:{game.price}</p> : <p>Free2Play</p>}
            </div>
          ))} */}
      </Modal>
    </div>
  )
}

export default ShopModal

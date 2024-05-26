import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { deleteItem } from '../redux/slices/shop'
import Modal from './modal'

const ShopModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const shopState = useSelector((state: RootState) => state.shop.items)
  const dispatch = useDispatch<AppDispatch>()
  const totalCost = useSelector((state: RootState) => state.shop.fullPrice)
  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="bg-buttonOrangeGradient dark:bg-darkButtonOrangeGradient m-[10px] px-10 py-5 text-center uppercase transi duration-500 bg-auto text-white shadow-lg block rounded-xl"
      >
        SHOP {totalCost}$
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        totalCost={totalCost}
      >
        <>
          {shopState.map((item) => (
            <div
              key={item.id}
              className="max-w-xs flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-4xl md:text-3xl lg:text-4xl xl:text-3xl">
                  {item.title}
                </h3>
                {item.price ? <p>Цена: {item.price}</p> : <p>Free2Play</p>}
              </div>
              <button onClick={() => dispatch(deleteItem(item.id))}>
                remove
              </button>
            </div>
          ))}
        </>
      </Modal>
    </div>
  )
}

export default ShopModal

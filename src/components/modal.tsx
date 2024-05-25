import { Dispatch, SetStateAction } from 'react'

export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean
  onClose: Dispatch<SetStateAction<boolean>>
  children: React.ReactNode
}) {
  if (!isOpen) {
    return null
  }
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const selection = window.getSelection()
    if (
      e.target === e.currentTarget &&
      (!selection || selection.toString().length === 0)
    ) {
      onClose(true)
    }
  }
  return (
    <div
      onClick={handleOutsideClick}
      className="backdrop-blur fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[rgba(0, 0, 0, 0.5)] text-greyText"
    >
      <div className=" p-5 items-center rounded-xl bg-white text-black shadow-xl text-4xl h-1/2 w-1/3">
        {children}

        <div className="flex mt-auto w-full justify-between 2xl:px-16 2xl:pb-6 xl:px-4 pt-3 xl:pb-3 2xl:pt-10 flex-col xl:flex-row">
          <button
            className="bg-red p-3 px-16 rounded-2xl text-2xl"
            onClick={(e) => {
              e.preventDefault()
              onClose(true)
            }}
          >
            Close
          </button>
          <button className="bg-blueButton p-3 px-16 rounded-2xl text-2xl">
            Buy
          </button>
        </div>
      </div>
    </div>
  )
}

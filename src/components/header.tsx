import ShopModal from './shopModal'
import SortButtons from './sortButtons'

export default function Header() {
  return (
    <div className="col-span-12 row-span-1 justify-center flex text-3xl items-center text-center">
      <SortButtons />
      <ShopModal />
    </div>
  )
}

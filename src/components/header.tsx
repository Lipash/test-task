import React from 'react'
import { useSort } from '../hooks/useSort'

const Header: React.FC = () => {
  const { setSortBy, resetSort, setPlatformFilter } = useSort() // Добавляем setPlatformFilter

  return (
    <div className="flex gap-10">
      <button onClick={() => setSortBy('high')}>UP</button>
      <button onClick={() => setSortBy('low')}>DOWN</button>
      <button onClick={() => setPlatformFilter('pc')}>PC</button>
      <button onClick={() => setPlatformFilter('xbox')}>Xbox</button>
      <button onClick={() => setPlatformFilter('ps')}>PS</button>
      <button onClick={resetSort}>Reset</button>
    </div>
  )
}

export default Header

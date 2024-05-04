import { createContext, useState, useContext, ReactNode } from 'react'
import { Platform } from '../api/GameList'

interface SortContextType {
  sortByRating: 'fromHighRating' | 'fromLowRating' | null
  setSortByRating: (sortBy: 'fromHighRating' | 'fromLowRating' | null) => void

  resetSort: () => void
  platformFilter: Platform[] | null
  setPlatformFilter: (platform: Platform[] | null) => void
  isOnline: 'Single player' | 'Internet' | null
  setIsOnline: (isOnline: 'Single player' | 'Internet' | null) => void
}

const SortContext = createContext<SortContextType | undefined>(undefined)

export const SortProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sortByRating, setSortByRating] = useState<
    'fromHighRating' | 'fromLowRating' | null
  >(null)

  const [platformFilter, setPlatformFilter] = useState<Platform[] | null>(null)
  const [isOnline, setIsOnline] = useState<'Single player' | 'Internet' | null>(
    null
  )
  const resetSort = () => {
    setSortByRating(null)
    setPlatformFilter(null)
    setIsOnline(null)
  }

  return (
    <SortContext.Provider
      value={{
        sortByRating,
        setSortByRating,
        resetSort,
        platformFilter,
        setPlatformFilter,
        isOnline,
        setIsOnline,
      }}
    >
      {children}
    </SortContext.Provider>
  )
}

export const useSort = (): SortContextType => {
  const context = useContext(SortContext)
  if (!context) {
    throw new Error('some Error')
  }
  return context
}

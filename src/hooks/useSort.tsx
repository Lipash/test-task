import { createContext, useState, useContext, ReactNode } from 'react'
import { Platform } from '../api/GameList'

interface SortContextType {
  sortBy: 'high' | 'low' | null
  setSortBy: (sortBy: 'high' | 'low' | null) => void
  resetSort: () => void
  platformFilter: Platform[] | null
  setPlatformFilter: (platform: Platform[] | null) => void
  isOnline: 'Single player' | 'Internet' | null
  seIsOnline: (isOnline: 'Single player' | 'Internet' | null) => void
}

const SortContext = createContext<SortContextType | undefined>(undefined)

export const SortProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sortBy, setSortBy] = useState<'high' | 'low' | null>(null)
  const [platformFilter, setPlatformFilter] = useState<Platform[] | null>(null)
  const [isOnline, seIsOnline] = useState<'Single player' | 'Internet' | null>(
    null
  )
  const resetSort = () => {
    setSortBy(null)
    setPlatformFilter(null)
  }

  return (
    <SortContext.Provider
      value={{
        sortBy,
        setSortBy,
        resetSort,
        platformFilter,
        setPlatformFilter,
        isOnline,
        seIsOnline,
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

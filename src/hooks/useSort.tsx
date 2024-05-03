import React, { createContext, useState, useContext, ReactNode } from 'react'

type SortType = 'high' | 'low'

interface SortContextType {
  sortBy: SortType | null
  setSortBy: (sortBy: SortType | null) => void
  resetSort: () => void
  platformFilter: 'pc' | 'xbox' | 'ps' | null
  setPlatformFilter: (platform: 'pc' | 'xbox' | 'ps' | null) => void
}

const SortContext = createContext<SortContextType | undefined>(undefined)

export const SortProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sortBy, setSortBy] = useState<SortType | null>(null)
  const [platformFilter, setPlatformFilter] = useState<
    'pc' | 'xbox' | 'ps' | null
  >(null)
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

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import HireModal from '../HireModal/HireModal'

const HireContext = createContext(null)

export function HireProvider({ children }) {
  const [open, setOpen] = useState(false)

  const openHire = useCallback(() => setOpen(true), [])
  const closeHire = useCallback(() => setOpen(false), [])

  const value = useMemo(
    () => ({ open, openHire, closeHire }),
    [open, openHire, closeHire]
  )

  return (
    <HireContext.Provider value={value}>
      {children}
      <HireModal open={open} onClose={closeHire} />
    </HireContext.Provider>
  )
}

export function useHire() {
  const ctx = useContext(HireContext)
  if (!ctx) {
    throw new Error('useHire must be used within HireProvider')
  }
  return ctx
}

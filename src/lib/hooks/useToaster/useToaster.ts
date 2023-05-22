//Librairies
import { create } from 'zustand'

type useToasterStoreType = {
  active: boolean
  setActive: () => void
}

export const useToasterStore = create<useToasterStoreType>((set) => ({
  active: false,
  setActive: () => {
    set((state) => ({ active: !state.active }))
    setTimeout(() => {
      set((state) => ({ active: !state.active }))
    }, 2000)
  },
}))

//Librairies
import { create } from 'zustand'

type useSliderStoreType = {
  value: number
  setValue: (value: number) => void
}

export const useSliderStore = create<useSliderStoreType>((set) => ({
  value: 1,
  setValue: (value: number) => set(() => ({ value })),
}))

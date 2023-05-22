//Librairies
import { create } from 'zustand'

type useCheckboxStoreType = {
  checkboxs: string[]
  setCheckboxs: (value: string) => void
  removeCheckboxs: (value: string) => void
}

export const useCheckboxStore = create<useCheckboxStoreType>((set) => ({
  checkboxs: ['LOWERCASE'],
  setCheckboxs: (value) => {
    set((state) => ({
      checkboxs: [...state.checkboxs, value],
    }))
  },
  removeCheckboxs: (value) => {
    set((state) => ({
      checkboxs: state.checkboxs.filter(
        (item) => item.toLowerCase() !== value.toLowerCase()
      ),
    }))
  },
}))

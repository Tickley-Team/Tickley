import { create } from 'zustand'

export interface SpareTimeState {
  spareTime: number
  setSpareTime: (value: number) => void
}
export const useSpareTimeStore = create<SpareTimeState>()((set) => ({
  spareTime: 0,
  setSpareTime: (value: number) => set({ spareTime: value }),
}))

import { SpareTimeState, useSpareTimeStore } from './spareTimeStore';
import { create } from 'zustand'

interface RecommendTodoFilterStore {
  spareTime: SpareTimeState["spareTime"]
  categoryName: string
  setSpareTime: (value: number) => void
}
export const useSpareTimeStore = create<SpareTimeState>()((set) => ({
  spareTime: 0,
  setSpareTime: (value: number) => set({ spareTime: value }),
}))


export const useSpareTimeStore = 
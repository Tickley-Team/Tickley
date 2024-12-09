import { SpareTimeState, useSpareTimeStore } from './spareTimeStore';
import { create } from 'zustand'

interface RecommendTodoFilterStore {
  categoryName: string
  spareTime: number
  setSpareTime: (value: number) => void
  setRecommendTodos: (value: number) => void
}
export const useRecommendTodoFilterStore = create<SpareTimeState>()((set) => ({
  spareTime: 0,
  setSpareTime: (value: number) => set({ spareTime: value }),
}))


export const useSpareTimeStore = 
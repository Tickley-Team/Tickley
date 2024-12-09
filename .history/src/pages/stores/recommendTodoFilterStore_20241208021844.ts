import { create } from 'zustand'

interface RecommendTodoFilterStore {
  categoryName: string
  spareTime: number
  setSpareTime: (value: number) => void
  setCategoryName: (value: number) => void
}
export const useRecommendTodoFilterStore = create<RecommendTodoFilterStore>()(
  (set) => ({
    categoryName: '',
    spareTime: 0,
    setSpareTime: (spareTime) => set({ spareTime }),
    setCategoryName:
  }),
)

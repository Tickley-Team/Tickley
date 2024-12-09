import { create } from 'zustand'

interface RecommendTodoFilterStore {
  categoryName: string
  spareTime: number
  setSpareTime: (spareTime: number) => void
  setCategoryName: (categoryName: string) => void
}
export const useRecommendTodoFilterStore = create<RecommendTodoFilterStore>()(
  (set) => ({
    categoryName: '',
    spareTime: 0,
    setSpareTime: (spareTime) => set({ spareTime }),
    setCategoryName: (categoryName) => set({ categoryName }),
  }),
)

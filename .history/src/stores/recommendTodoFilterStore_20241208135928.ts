import { create } from 'zustand'

interface RecommendTodoFilterStore {
  categoryName: string
  spareTime: number
  setSpareTime: (spareTime: number) => void
  setCategoryName: (categoryName: string) => void
}
export const useRecommendTodoFilterStore = create<RecommendTodoFilterStore>()(
  (set) => ({
    categoryName: '휴식',
    spareTime: 15,
    setSpareTime: (spareTime) => set({ spareTime }),
    setCategoryName: (categoryName) => set({ categoryName }),
  }),
)

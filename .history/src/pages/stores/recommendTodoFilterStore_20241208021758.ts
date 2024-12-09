import { create } from 'zustand'

interface RecommendTodoFilterStore {
  categoryName: string
  spareTime: number
  setSpareTime: (value: number) => void
  setRecommendTodos: (value: number) => void
}
export const useRecommendTodoFilterStore = create<RecommendTodoFilterStore>()(
  (set) => ({
    categoryName: '',
    spareTime: 0,
    setSpareTime: (value) => value,
  }),
)

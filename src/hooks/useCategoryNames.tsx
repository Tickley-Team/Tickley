import { useMemo } from 'react'
import { RecommendTodo } from '../types'

type CategoryNames = RecommendTodo[] & { icon?: string }
export const useCategoryNames = (todos: CategoryNames): string[] => {
  return useMemo(
    () => Array.from(new Set(todos.map((todo) => todo.categoryName))),
    [todos],
  )
}

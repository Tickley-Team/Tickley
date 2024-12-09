import { useMemo } from 'react'
import { RecommendTodo } from '../api/fetchRecommendTodos'

export const useCategoryNames = (todos: RecommendTodo[]): string[] => {
  return useMemo(
    () => Array.from(new Set(todos.map((todo) => todo.categoryName))),
    [todos],
  )
}

import { useMemo } from 'react'

export const useCategoryNames = (todos: RecommendTodo[]): string[] => {
  return useMemo(
    () => Array.from(new Set(todos.map((todo) => todo.categoryName))),
    [todos],
  )
}

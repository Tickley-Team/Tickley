import { useMemo } from 'react'

export const useCategoryNames = (todos) => {
  return (
    useMemo(() =>
      Array.from(new Set(todosMockData?.map((todo) => todo.categoryName))),

    [todos]
  )
}

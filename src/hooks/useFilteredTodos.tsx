import { useRecommendTodoFilterStore } from '../stores/recommendTodoFilterStore'
import { RecommendTodo } from '../types'
import { useCategoryNames } from './useCategoryNames'

export const useFilterTodos = (todos: Array<RecommendTodo>) => {
  const { spareTime, categoryName, setCategoryName } =
    useRecommendTodoFilterStore()

  const categoryNames = useCategoryNames(todos)

  const filteredTodos = todos.filter(
    (todo) =>
      todo.categoryName === categoryName &&
      Number(todo.estimateTime) <= spareTime,
  )

  return { filteredTodos, categoryNames, setCategoryName, spareTime }
}

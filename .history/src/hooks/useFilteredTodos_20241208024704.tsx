import { RecommendTodo } from '../api/fetchRecommendTodos'
import { useRecommendTodoFilterStore } from '../stores/recommendTodoFilterStore'
import { useCategoryNames } from './useCategoryNames'

const useFilterTodos = (todos: Array<RecommendTodo>) => {
  const { spareTime, categoryName, setCategoryName } =
    useRecommendTodoFilterStore()

  const categoryNames = useCategoryNames(todos)

  const filteredTodos = todos.filter(
    (todo) =>
      todo.categoryName === categoryName &&
      Number(todo.estimateTime) === spareTime,
  )

  return { filteredTodos, categoryNames, setCategoryName, spareTime }
}

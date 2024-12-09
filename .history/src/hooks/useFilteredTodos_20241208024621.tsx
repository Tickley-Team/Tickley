import { RecommendTodo } from '../api/fetchRecommendTodos'
import { useCategoryNames } from './useCategoryNames'

const useFilterTodos = (todos: Array<RecommendTodo>) => {
  const { spareTime, categoryName, setCategoryName } =
    useRecommendTodoFilterStore()

  const categoryNames = useCategoryNames(todos)

  const filteredTodos = todosMockData.filter(
    (todo) =>
      todo.categoryName === categoryName &&
      Number(todo.estimateTime) === spareTime,
  )
}

import { RecommendTodo } from '../api/fetchRecommendTodos'

const useFilterTodos = (todos: Array<RecommendTodo>) => {
  const { spareTime, categoryName, setCategoryName } =
    useRecommendTodoFilterStore()
}

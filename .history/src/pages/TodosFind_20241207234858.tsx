import { useLoaderData } from 'react-router'
import { RecommendTodo } from '../api/fetchRecommendTodos'

const TodosFind = () => {
  const todosMockData = useLoaderData<RecommendTodo[]>()
  const category = todosMockData?.map((todo) => todo.categoryName)
  console.log('dasta', category)
  return (
    <div>
      <CategoryBar data={category} />
    </div>
  )
}

export default TodosFind

export const CategoryBar = () => {}

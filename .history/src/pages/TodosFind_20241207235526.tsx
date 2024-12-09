import { useLoaderData } from 'react-router'
import { RecommendTodo } from '../api/fetchRecommendTodos'

const TodosFind = () => {
  const todosMockData = useLoaderData<RecommendTodo[]>()
  const category = todosMockData?.map((todo) => todo.categoryName)
  const handleClickCategory = () => {}
  return (
    <div>
      <CategoryBar data={category} onClick={handleClickCategory} />
    </div>
  )
}

export default TodosFind

type CategoryNames = Pick<RecommendTodo, 'categoryName'>
type CategoryBarProps = {
  categoryNames: CategoryNames
}
export const CategoryBar = ({ categoryNames }: CategoryBarProps) => {}

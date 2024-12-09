import { useLoaderData } from 'react-router'
import { RecommendTodo } from '../api/fetchRecommendTodos'
import Button from '@mui/material/Button'

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

type CategoryNames = Array<Pick<RecommendTodo, 'categoryName'>>
type CategoryBarProps = {
  categoryNames: CategoryNames
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}
export const CategoryBar = ({ categoryNames, onClick }: CategoryBarProps) => {
  return (
    <>
      {categoryNames.map((categoryName) => (
        <Button variant="outlined">Primary</Button>
      ))}
    </>
  )
}

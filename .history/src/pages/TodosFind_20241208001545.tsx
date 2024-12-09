import { useLoaderData } from 'react-router'
import { RecommendTodo } from '../api/fetchRecommendTodos'
import Button from '@mui/material/Button'

const TodosFind = () => {
  const todosMockData = useLoaderData<RecommendTodo[]>()
  const category = todosMockData?.map((todo) => todo.categoryName)
  const handleClickCategory = () => {}
  return (
    <div>
      <CategoryBar categoryNames={category} onClick={handleClickCategory} />
    </div>
  )
}

export default TodosFind
type RecommendTodos = Array<RecommendTodo['categoryName']>

type CategoryBarProps = {
  categoryNames: CategoryNames
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export const CategoryBar = ({ categoryNames, onClick }: CategoryBarProps) => {
  return (
    <>
      {categoryNames.map(({ categoryName }, idx) => (
        <Button key={`${categoryName}_${idx}`} variant="outlined">
          {categoryName}
        </Button>
      ))}
    </>
  )
}

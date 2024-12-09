import { useLoaderData } from 'react-router'
import { RecommendTodo } from '../api/fetchRecommendTodos'
import Button from '@mui/material/Button'

const TodosFind = () => {
  const todosMockData = useLoaderData<RecommendTodo[]>()
  const category = new Set(todosMockData?.map((todo) => todo.categoryName))
  console.log('category', category)
  const handleClickCategory = () => {}
  return (
    <div>
    </div>      <CategoryBar categoryNames={Array.from(category)} onClick={handleClickCategory} />

  )
}

export default TodosFind
type CategoryNames = Array<RecommendTodo['categoryName']>

type CategoryBarProps = {
  categoryNames: CategoryNames
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export const CategoryBar = ({ categoryNames, onClick }: CategoryBarProps) => {
  return (
    <>
      {categoryNames.map((categoryName, idx) => (
        <Button key={`${categoryName}_${idx}`} variant="outlined">
          {categoryName}
        </Button>
      ))}
    </>
  )
}

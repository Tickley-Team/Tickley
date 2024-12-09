import { useLoaderData } from 'react-router'
import { RecommendTodo } from '../api/fetchRecommendTodos'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const TodosFind = () => {
  const todosMockData = useLoaderData<RecommendTodo[]>()
  const category = new Set(todosMockData?.map((todo) => todo.categoryName))
  console.log('category', category)
  const handleClickCategory = () => {}
  return (
    <div>
      <CategoryBar
        categoryNames={Array.from(category)}
        onClick={handleClickCategory}
      />
      <TodoList>
        {}

      </TodoList>
    </div>
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

export const TodoItem = ()=>{
  return <>
   <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
>
  {}
  </Stack>


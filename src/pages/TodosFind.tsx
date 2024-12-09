import { useLoaderData } from 'react-router'
import { Box, Button, Stack } from '@mui/material'
import { useFilterTodos } from '../hooks/useFilteredTodos'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { DateNowToUnix } from '../utils'
import {
  CategoryNames,
  RecommendTodo,
  TodoItem,
  TodoRecommendItemType,
} from '../types'
import { MobileLayout } from '../layout/MobileLayout'
import { RangeSlider } from '../components/RangeSlider'
import BottomNavbar from '../components/BottomNavbar'

const TodosFind = () => {
  const todosMockData = useLoaderData<RecommendTodo[]>()?.map((todo) => ({
    ...todo,
    estimateTime: Number(todo.estimateTime),
  }))
  const { categoryNames, setCategoryName, filteredTodos } =
    useFilterTodos(todosMockData)

  const { addToStoredValue } = useLocalStorage<TodoItem[]>([], 'todos')

  const addTodo = (selectedRecommendTodo: RecommendTodo) => {
    addToStoredValue({
      title: selectedRecommendTodo.title,
      estimateTime: selectedRecommendTodo.estimateTime,
      itemStatus: 'ready',
      registeredDate: DateNowToUnix(),
    })
  }
  return (
    <MobileLayout>
      <RangeSlider />
      <CategoryBar categoryNames={categoryNames} onClick={setCategoryName} />
      <TodoList list={filteredTodos} onAddTodo={addTodo} />
      <div>
        {/* 하단 고정 네비게이션바*/}
        <BottomNavbar />
      </div>
    </MobileLayout>
  )
}

export default TodosFind

export const TodoList = ({
  list,
  onAddTodo,
}: {
  list: RecommendTodo[]
  onAddTodo: (todo: RecommendTodo) => void
}) => {
  return (
    <>
      {list.map((todo) => (
        <TodoRecommendItem
          key={todo.id}
          {...todo}
          onClick={() => onAddTodo(todo)}
        />
      ))}
    </>
  )
}
type CategoryBarProps = {
  categoryNames: CategoryNames
  onClick: (e: string) => void
}
export const CategoryBar = ({ categoryNames, onClick }: CategoryBarProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {categoryNames.map((categoryName, idx) => (
        <Button
          key={`${categoryName}_${idx}`}
          variant="outlined"
          onClick={() => onClick(categoryName)}
        >
          {categoryName}
        </Button>
      ))}
    </Box>
  )
}

export type TodoRecommendItemProps = TodoRecommendItemType & {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}
export const TodoRecommendItem = ({
  title,
  estimateTime,
  onClick,
}: TodoRecommendItemProps) => {
  return (
    <Stack direction={{ xs: 'column' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
      <div className={'icon'}>
        <img src="" />
      </div>

      <p>{title}</p>
      <span>{estimateTime}분</span>
      <p>할일에 대한 설명랗기하기하기 </p>

      <button onClick={onClick}>plus button</button>
    </Stack>
  )
}

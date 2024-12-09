import { useLoaderData } from 'react-router'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
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
      <div
        style={{
          position: 'relative',
          marginTop: '40px',
          width: '100%',
          marginBottom: '24px',
        }}
      >
        <RangeSlider />
      </div>
      <Divider
        style={{
          margin: '24px 0',
          color: 'black',
          width: '100%',
        }}
      />
      <Typography>추천 할일</Typography>
      <Typography>틈새시간 할일을 추천해드려요.</Typography>
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
        style={{"width: 52px" padding-left: 12px; padding-right: 12px; background: #040404; border-radius: 4px; overflow: hidden; justify-content: center; align-items: center; gap: 4px; display: flex"}}
          key={`${categoryName}_${idx}`}
          variant="outlined"
          onClick={() => onClick(categoryName)}
        >
          
  </div>
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

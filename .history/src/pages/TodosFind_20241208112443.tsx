import { useLoaderData } from 'react-router'
import { RecommendTodo } from '../api/fetchRecommendTodos'
import { Button, Stack } from '@mui/material'
import { useFilterTodos } from '../hooks/useFilteredTodos'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TodosFind = () => {
  const todosMockData = useLoaderData<RecommendTodo[]>()?.map((todo) => ({
    ...todo,
    estimateTime: Number(todo.estimateTime),
  }))
  console.log('todosMockData', todosMockData)
  const { categoryNames, setCategoryName, filteredTodos } =
    useFilterTodos(todosMockData)
  const [, setTodos] = useLocalStorage<TodoItem[]>('todos', [])
  const addTodo = (selectedRecommendTodo: RecommendTodo) => {
    setTodos(selectedRecommendTodo)
  }
  return (
    <div>
      <CategoryBar categoryNames={categoryNames} onClick={setCategoryName} />
      <TodoList list={filteredTodos} onAddTodo={addTodo} />
    </div>
  )
}

export default TodosFind

type CategoryNames = Array<RecommendTodo['categoryName']>
type CategoryBarProps = {
  categoryNames: CategoryNames
  onClick: (e: string) => void
}

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

export const CategoryBar = ({ categoryNames, onClick }: CategoryBarProps) => {
  return (
    <>
      {categoryNames.map((categoryName, idx) => (
        <Button
          key={`${categoryName}_${idx}`}
          variant="outlined"
          onClick={() => onClick(categoryName)}
        >
          {categoryName}
        </Button>
      ))}
    </>
  )
}

interface TodoItem {
  title: string
  estimateTime: number
  itemStatus: 'ready' | 'done'
  registeredDate: number //unix time,보여줄 때만
  // 추가로 아이콘이 생길 수 있음
}
type TodoRecommendItemProps = Omit<
  TodoItemProps,
  'registeredDate' | 'itemStatus'
>
type TodoItemProps = TodoItem & {
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
      <Stack>
        <p>{title}</p>
        <span>{estimateTime}분</span>
        <p>할일에 대한 설명랗기하기하기 </p>
      </Stack>
      <button onClick={onClick}>plus button</button>
    </Stack>
  )
}

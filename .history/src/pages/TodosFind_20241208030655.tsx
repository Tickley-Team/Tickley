import { useLoaderData } from 'react-router'
import { RecommendTodo } from '../api/fetchRecommendTodos'
import { Button, Stack } from '@mui/material'
import { useFilterTodos } from '../hooks/useFilteredTodos'

const TodosFind = () => {
  const todosMockData = useLoaderData<RecommendTodo[]>()
  const { categoryNames, setCategoryName, filteredTodos } =
    useFilterTodos(todosMockData)

  return (
    <div>
      <CategoryBar categoryNames={categoryNames} onClick={setCategoryName} />
      <TodoList list={filteredTodos} />
    </div>
  )
}

export default TodosFind

type CategoryNames = Array<RecommendTodo['categoryName']>
type CategoryBarProps = {
  categoryNames: CategoryNames
  onClick: (e: string) => void
}

export const TodoList = ({ list }: { list: RecommendTodo[] }) => {
  return (
    <>
      {list.map((todo) => (
        <TodoRecommendItem key={todo.id} {...todo} />
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
  handleButtonClicked: (e: React.MouseEvent<HTMLButtonElement>) => void
}
export const TodoRecommendItem = ({
  title,
  estimateTime,
  onClick,
}: TodoRecommendItemProps) => {
  return (
    <>
      <Stack direction={{ xs: 'column' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <div className={'icon'}>
          <img src="" />
        </div>
        <Stack>
          <p>{'녹차우려먹기'}</p>
          <span>{'15분'}</span>
          <p>할일에 대한 설명랗기하기하기 </p>
        </Stack>
        <button onClick={onClick}>plus button</button>
      </Stack>
    </>
  )
}

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

      <TodoList list={todosMockData}>{}</TodoList>
    </div>
  )
}

export default TodosFind
type CategoryNames = Array<RecommendTodo['categoryName']>

type CategoryBarProps = {
  categoryNames: CategoryNames
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}
export const TodoList = ({list}:{list:RecommendTodo[]})=>{
  return (
    {list.map(({}) => (
      <TodoItem key={id} estimateTime={}/>
    ))}
  )
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

const TodoList = () => {}
interface TodoItem {
  title: string
  estimateTime: number
  itemStatus: 'ready' | 'done'
  registeredDate: number //unix time,보여줄 때만
  // 추가로 아이콘이 생길 수 있음
}
type TodoItemProps = TodoItem & {
  handleButtonClicked: (e: React.MouseEvent<HTMLButtonElement>) => void
}
export const TodoItem = ({
  title,
  estimateTime,
  itemStatus,
  registeredDate,
}: TodoItemProps) => {
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
        <button onClick={handleButtonClicked}>plus button</button>
      </Stack>
    </>
  )
}

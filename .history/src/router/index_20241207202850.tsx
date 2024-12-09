import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home'
import OnBoarding from '../pages/OnBoarding'
import SurveySpareTime from '../pages/SurveySpareTime'
import Todos from '../pages/Todos'
import TodosFind from '../pages/TodosFind'

const delay: (ms: number) => Promise<boolean> = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}

interface TodoItem {
  title: string
  estimateTime: number
  itemStatus: 'ready' | 'done'
  registeredDate: number //unix time,보여줄 때만
  // 추가로 아이콘이 생길 수 있음
}

interface TodoList {
  todos: TodoItem[]
}
export const fetchTodo: () => Promise<TodoList> = async () => {
  await delay(1000)
  const key = 'todoList'
  try {
    const response = localStorage.getItem(key)
    if (!response) {
      throw new Error('데이터가 없습니다')
    }
    const parsedData = JSON.parse(response) as TodoList[]

    // 타입 검증 (선택적)
    if (!Array.isArray(parsedData)) {
      throw new Error('유효하지 않은 데이터 형식입니다')
    }
  } catch (error) {
    console.error(error)
    throw new Error('데이터를 가져오는 중 에러가 났습니다')
  }
}
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: ' /onboarding',
    element: <OnBoarding />,
  },
  {
    path: '/todos',
    element: <Todos />,
  },
  {
    path: '/todos/find',
    element: <TodosFind />,
    loader: fetchData,
  },
  {
    path: '/survey',
    element: <SurveySpareTime />,
  },
])

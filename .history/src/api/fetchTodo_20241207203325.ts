import { delay } from '../utils'

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

export const fetchTodo: () => Promise<TodoList | undefined> = async () => {
  await delay(1000)
  const key = 'todoList'
  try {
    const response = localStorage.getItem(key)
    if (!response) {
      throw new Error('데이터가 없습니다')
    }
    const parsedData = JSON.parse(response) as TodoList

    // 타입 검증 (선택적)
    if (!Array.isArray(parsedData)) {
      throw new Error('유효하지 않은 데이터 형식입니다')
    }
    return parsedData ||[]
  } catch (error) {
    console.error(error)
    throw new Error('데이터를 가져오는 중 에러가 났습니다')
  }
}

export 
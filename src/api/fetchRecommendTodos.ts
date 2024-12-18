import { RecommendTodo } from '../types'

export const fetchRecommendTodos = async (
  path: string,
): Promise<Array<RecommendTodo>> => {
  try {
    const response = await fetch(path)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`데이터 로드 실패: ${error.message}`)
    }
    throw new Error('알 수 없는 에러가 발생했습니다')
  }
}

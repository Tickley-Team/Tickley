interface RecommendCategory {
  categoryCode: string
  title: string
}

interface TodoRecommendSystem {
  category: RecommendCategory[]
}
export interface RecommendTodo extends RecommendCategory {
  id: string
}

export const fetchRecommendTodos = async (
  path: string,
): Promise<Array<RecommendTodo>> => {
  try {
    const response = await fetch(path)
    console.log('response', response)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = (await response.json()) as RecommendTodo[]
    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`데이터 로드 실패: ${error.message}`)
    }
    throw new Error('알 수 없는 에러가 발생했습니다')
  }
}

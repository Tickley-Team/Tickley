export interface TodoItem {
  title: string
  estimateTime: number
  itemStatus: 'ready' | 'done'
  registeredDate: number //unix time,보여줄 때만
  // 추가로 아이콘이 생길 수 있음
}

export type TodoList = TodoItem[]

export type TodoRecommendItemType = Omit<
  TodoItem,
  'registeredDate' | 'itemStatus'
>

export type CategoryNames = Array<RecommendTodo['categoryName']>

interface RecommendCategory {
  categoryCode: string
  title: string
}

export interface RecommendTodo extends RecommendCategory {
  id: string
  categoryName: string
  estimateTime: number
  title: string
}

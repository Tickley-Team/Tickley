export interface TodoItem {
  title: string
  estimateTime: number
  itemStatus: 'ready' | 'done'
  registeredDate: number //unix time,보여줄 때만
  categoryName: string
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

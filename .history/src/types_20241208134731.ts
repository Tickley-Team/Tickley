export interface TodoItem {
  title: string
  estimateTime: number
  itemStatus: 'ready' | 'done'
  registeredDate: number //unix time,보여줄 때만
  // 추가로 아이콘이 생길 수 있음
}
export type TodoRecommendItemProps = Omit<
  TodoItemProps,
  'registeredDate' | 'itemStatus'
>
export type TodoItemProps = TodoItem & {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export type CategoryNames = Array<RecommendTodo['categoryName']>

export interface TodoList {
  todos: TodoItem[]
}
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
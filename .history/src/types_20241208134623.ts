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

type CategoryNames = Array<RecommendTodo['categoryName']>
type CategoryBarProps = {
  categoryNames: CategoryNames
  onClick: (e: string) => void
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

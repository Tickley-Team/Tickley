import { create } from 'zustand'

export interface TodoItem {
  title: string
  estimateTime: number
  itemStatus: 'ready' | 'done'
  registeredDate: number // Unix timestamp
  categoryName: string
}

export interface TodoState {
  todo: TodoItem | null // 단일 Todo 항목
  addTodo: (todo: TodoItem) => void // 단일 Todo 추가
  setTodoStatus: (status: 'ready' | 'done') => void // 단일 Todo 상태 업데이트
}

export const useTodoStore = create<TodoState>((set) => ({
  todo: null,
  addTodo: (newTodo: TodoItem) =>
    set(() => ({
      todo: newTodo,
    })),
  setTodoStatus: (status: 'ready' | 'done') =>
    set((state) => ({
      todo: state.todo ? { ...state.todo, itemStatus: status } : null,
    })),
}))

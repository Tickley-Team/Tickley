import create from 'zustand'

interface Todo {
  id: string
  title: string
  estimateTime: number
  itemStatus: 'ready' | 'done'
}

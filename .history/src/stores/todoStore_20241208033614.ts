import create from 'zustand'
import { delay } from '../utils'

const loadTodoFromLocalStorage = async () => {
  await delay(1000)
  const todos = localStorage.getItem('todos')
  return todos ? JSON.parse(todos) : []
}

import create from 'zustand'

const loadTodoFromLocalStorage = () => {
  const todos = localStorage.getItem('todos')
  return todos ? JSON.parse(todos) : []
}

import { useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : initialValue
  })

  const addToStoredValue = (newItem: T[number]) => {
    const updatedValue = [...value, newItem] as T // T가 객체 배열로 제한됨
    setValue(updatedValue)
    localStorage.setItem(key, JSON.stringify(updatedValue))
  }

  const setStoredValue = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, setStoredValue, addToStoredValue] as const
}

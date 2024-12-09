import { useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T[]>(() => {
    const storedValue = localStorage.getItem(key)
    const data = storedValue ? JSON.parse(storedValue) : initialValue
    return Array.isArray(data) ? data : initialValue
  })

  const addToStoredValue = (newItem: T) => {
    let updatedValue: T
    if (Array.isArray(newItem)) {
      updatedValue = [...value, newItem] as T
    } else {
      updatedValue = newItem
    }
    setValue(updatedValue)
    localStorage.setItem(key, JSON.stringify(updatedValue))
  }

  return { value, addToStoredValue }
}

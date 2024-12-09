import { useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T[]>(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : initialValue
  })

  const addToStoredValue = (newItem: T) => {
    let updatedValue: T
    if (Array.isArray(newItem)) {
      updatedValue = [...value, newItem] as T
    }
    setValue(updatedValue)
    localStorage.setItem(key, JSON.stringify(updatedValue))
  }

  return { value, addToStoredValue }
}

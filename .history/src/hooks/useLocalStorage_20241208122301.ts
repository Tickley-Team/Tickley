import { useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T[]>(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : initialValue
  })

  const addToStoredValue = (newItem: T) => {
    const updatedValue = [...value, newItem]
    setValue(updatedValue)
    localStorage.setItem(key, JSON.stringify(updatedValue))
  }

  return { value, setStoredValue, addToStoredValue }
}

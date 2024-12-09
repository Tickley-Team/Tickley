import { useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const storedValue = localStorage.getItem(key)
  const [value, setValue] = useState<T>(() => {
    const data = storedValue ? JSON.parse(storedValue) : initialValue
    return data
  })

  const setStoredValue = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }
  return [value, setStoredValue]
}

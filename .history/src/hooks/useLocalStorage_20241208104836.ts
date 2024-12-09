import { useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  console.log('localStorage')

  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key)
    const data = storedValue ? JSON.parse(storedValue) : initialValue
    return data
  })
  const setStoredValue = (newValue: T) => {
    setValue(newValue)
    const updatedValue = [...value, newValue]
    localStorage.setItem(key, JSON.stringify(newValue))
  }
  return [value, setStoredValue]
}

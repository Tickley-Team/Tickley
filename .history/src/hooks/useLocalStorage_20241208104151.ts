import { useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  console.log('localStorage')

  const [value, setValue] = useState<T>(() => {
    const storedValue = JSON.parse(localStorage.getItem(key) || '')
    const data = storedValue ? JSON.parse(storedValue) : initialValue
    return data
  })
  const setStoredValue = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }
  return [value, setStoredValue]
}

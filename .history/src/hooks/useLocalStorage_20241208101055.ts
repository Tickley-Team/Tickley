import { useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  console.log('localStorage')
  const storedValue = localStorage.getItem(key)
  const [value, setValue] = useState<T>(() => {
    const data = storedValue ? JSON.parse(storedValue) : initialValue
    console.log('Data', data)
    return data
  })
  console.log('value', value)
  const setStoredValue = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }
  return [value, setStoredValue]
}

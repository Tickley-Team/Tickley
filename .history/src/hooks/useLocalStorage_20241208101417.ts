import { useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  console.log('localStorage')

  const [value, setValue] = useState<T>(() => {
    const storedValue = JSON.parse(localStorage.getItem(key) || '[]')

    const storedValue = localStorage.getItem(key)
    if (storedValue) {
      console.log(JSON.parse(storedValue))
    }
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

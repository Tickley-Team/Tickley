import { useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : initialValue
  })

  const setStoredValue = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }
  // 기존 배열에 객체를 추가하는 로직
  const addToStoredValue = (newItem: T) => {
    const updatedValue = [...value, newItem] as T // 기존의 값에 추가
    setValue(updatedValue)
    localStorage.setItem(key, JSON.stringify(updatedValue))
  }

  return { value, setStoredValue, addToStoredValue } as const
}

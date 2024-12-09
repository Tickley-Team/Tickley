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
  const addToStoredValue = (newItem: T extends Record<string, any>) => {
    if (!Array.isArray(value)) {
      throw new Error('addToStoredValue는 배열에만 사용할 수 있습니다.')
    }
    const updatedValue = [...value, newItem] // 기존의 값에 추가
    setValue(updatedValue)
    localStorage.setItem(key, JSON.stringify(updatedValue))
  }

  return { value, setStoredValue, addToStoredValue } as const
}

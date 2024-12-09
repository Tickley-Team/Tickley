import { useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key)
    // 로컬스토리지에서 값을 가져오되, 배열인지 확인 후 처리
    try {
      const data = storedValue ? JSON.parse(storedValue) : initialValue
      return Array.isArray(data) ? data : initialValue // 배열이 아니면 기본값 사용
    } catch (e) {
      // 파싱 오류가 나면 초기값 사용
      return initialValue
    }
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

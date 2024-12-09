import { useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key)
    // 로컬스토리지 값이 없으면 초기값 사용, 값이 있으면 JSON으로 파싱
    const data = storedValue ? JSON.parse(storedValue) : initialValue
    // 데이터 타입이 맞는지 확인하고 아니라면 초기값으로 설정
    if (Array.isArray(data)) {
      return data as T // 배열일 때만 배열로 반환
    }
    return initialValue // 배열이 아니면 초기값으로 설정
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

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const storedValue = localStorage.getItem(key)
  const [value, setValue] = useState<T>(() => {
    const data = storedValue ? JSON.parse(storedValue) : initialValue

    return
  })
}

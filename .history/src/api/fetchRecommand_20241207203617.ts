export const fetchRecommand = () => {
  try {
    const response = await fetch(path)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = (await response.json()) as Data[]
    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`데이터 로드 실패: ${error.message}`)
    }
    throw new Error('알 수 없는 에러가 발생했습니다')
  }
}

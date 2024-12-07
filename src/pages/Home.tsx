import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'

interface MockData {
  isFirstVisit: boolean
  hasTodoData: boolean
}

const mockData: MockData = {
  isFirstVisit: true,
  hasTodoData: false,
}

const Home = () => {
  const navigate = useNavigate()
  const [isFirstVisit, ] = useState(mockData.isFirstVisit)
  const [hasTodoData, ] = useState(mockData.hasTodoData)

  // 처음 접속하지 않았을 때
  useEffect(() => {
    if (isFirstVisit) {
      return;
    }

    if (hasTodoData) {  // 오늘 할일이 있다면
      navigate('/todos')
      return;
    } else {  // 오늘 할일이 없다면
      navigate('/todos/find')
      return;
    }
  }, [isFirstVisit, hasTodoData])

  return (
    <div>
      <div>틈새시간 할일 알려줌</div>
      <div>티끌,먼지 이미지</div>
      {/* 시작하기 버튼 누르면 온보딩 화면으로 이동 */}
      <Link to="/onboarding/0">
        <button>시작하기</button>
      </Link>
    </div>
  )
}

export default Home

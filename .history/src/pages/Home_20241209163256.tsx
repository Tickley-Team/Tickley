import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import guideSpeechBubble from '../assets/guideSpeechBubble.svg'
import mainTickley from '../assets/mainTickley.svg'
import { CTAButton } from '../components/Button'
import { MobileLayout } from '../layout/MobileLayout'

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
  const [isFirstVisit] = useState(mockData.isFirstVisit)
  const [hasTodoData] = useState(mockData.hasTodoData)

  // 처음 접속하지 않았을 때
  useEffect(() => {
    if (isFirstVisit) {
      return
    }

    if (hasTodoData) {
      // 오늘 할일이 있다면
      navigate('/todos')
      return
    } else {
      // 오늘 할일이 없다면
      navigate('/todos/find')
      return
    }
  }, [isFirstVisit, hasTodoData])

  return (
    <MobileLayout>
      <Typography variant="headline-8-heavy">티클리</Typography>
      <img src={guideSpeechBubble} alt={'guideSpeechBubble'} />
      <img src={mainTickley} alt={'mainTickley'} />
      {/* 시작하기 버튼 누르면 온보딩 화면으로 이동 */}
      <Link to="/onboarding/0" style={{ width: '100%' }}>
        <CTAButton>시작하기</CTAButton>
      </Link>
    </MobileLayout>
  )
}

export default Home

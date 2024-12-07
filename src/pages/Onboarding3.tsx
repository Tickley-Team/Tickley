import React from 'react'
import { useNavigate } from 'react-router-dom'

const Onboarding3 = () => {
  const navigate = useNavigate()

  const clickNext = () => {
    // Onboarding2로 이동
    navigate('/onboarding4')
  }

  const clickSkip = () => {
      alert("추천 질문 페이지로 이동")
  }

  return (
    <div>
        <p>바쁜 일상 속 플려보내기 쉬운 시간을</p>
        <p>이제는 놓치지 않을 수 있도록 도와드릴게요!</p>
        <button onClick={clickNext}>다음</button>
        <button onClick={clickSkip}>건너뛰기</button>
    </div>
  )
}

export default Onboarding3

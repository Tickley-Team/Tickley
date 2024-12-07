import React from 'react'
import { useNavigate } from 'react-router-dom'

const Onboarding2 = () => {
  const navigate = useNavigate()

  const clickNext = () => {
    // Onboarding3으로 이동
    navigate('/onboarding3')
  }

  const clickSkip = () => {
      alert("추천 질문 페이지로 이동")
  }

  return (
    <div>
        <p>의미 없이 휴대폰만 스크롤하며</p>
        <p>'이 시간에 영어 단어 하나라도 외웠다면...'</p>
        <p>같은 생각을 해본 적이 있나요?</p>
        <button onClick={clickNext}>다음</button>
        <button onClick={clickSkip}>건너뛰기</button>
    </div>
  )
}

export default Onboarding2

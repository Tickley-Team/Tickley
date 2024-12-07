import React from 'react'
import { useNavigate } from 'react-router'

const Onboarding1 = () => {
  const navigate = useNavigate()

  const clickNext = () => {
    // Onboarding2로 이동
    navigate('/onboarding2')
  }

  const clickSkip = () => {
      alert("추천 질문 페이지로 이동")
  }

  return (
    <div>
        <p>어느새 하루가 훌쩍지나갔는데</p>
        <p>'오늘 뭘 많이 하긴 했었는데... 내가 뭘 했더라?' 싶은 적이 있나요?</p>
        <button onClick={clickNext}>다음</button>
        <button onClick={clickSkip}>건너뛰기</button>
    </div>
  )
}

export default Onboarding1

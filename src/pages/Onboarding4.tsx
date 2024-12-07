import React from 'react'

const goToRecommend = () => {
    alert("추천 질문 페이지로 이동")
}


const Onboarding4 = () => {
  return (
    <div>
        <p>티끌 같은 시간을 쌓아 태산 같은 변화를</p>
        <p>저희와 함께 만들어 봐요!</p>
        <button onClick={goToRecommend}>다음</button>
    </div>
  )
}

export default Onboarding4

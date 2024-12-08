import { useState } from 'react'
import TodoMemoryDatePopup from '../components/TodoMemoryDatePopup'
import TodoMemoryColorStandardPopup from '../components/TodoMemoryColorStandardPopup'
import { MobileLayout } from '../layout/MobileLayout'
import BottomNavbar from '../components/BottomNavbar'

const TodosMemory = () => {
  const [isShowDatePopup, setShowDatePopup] = useState(false)
  const [isShowColorStandard, setShowColorStandard] = useState(false)

  return (
    <MobileLayout>
      <div>
        <section>
          <p>
            9월, 하루에 모든 자투리 시간이 1시간 30분 이상인 날이 16일이에요
          </p>
          <p>티끌같은 시간이 모여 태산을 이뤘네요!</p>
          <img alt="이미지" />
        </section>
        <section>
          <button onClick={() => setShowDatePopup(true)}>날짜</button>
          <button onClick={() => setShowColorStandard(true)}>
            칸 색상 기준 ?
          </button>
          <p>잔디영역</p>
        </section>
        <BottomNavbar />
      </div>
      {isShowDatePopup && (
        <TodoMemoryDatePopup onClickClose={() => setShowDatePopup(false)} />
      )}
      {isShowColorStandard && (
        <TodoMemoryColorStandardPopup
          onClickClose={() => setShowColorStandard(false)}
        />
      )}
    </MobileLayout>
  )
}

export default TodosMemory

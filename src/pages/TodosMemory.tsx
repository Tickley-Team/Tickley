import { useState } from 'react'
import { Link } from 'react-router'

import TodoMemoryDatePopup from '../components/TodoMemoryDatePopup'
import TodoMemoryColorStandardPopup from '../components/TodoMemoryColorStandardPopup'
import { MobileLayout } from '../layout/MobileLayout'

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
        <div>
          <Link to="/todos">
            <button>오늘 할일</button>
          </Link>
          <Link to="/todos/find">
            <button>할일 찾기</button>
          </Link>
          <Link to="/todos/memory">
            <button>기록</button>
          </Link>
        </div>
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

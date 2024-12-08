import { Link } from "react-router";
import AddTodoMainButton from "../components/AddTodoMainButton";
import { useState } from 'react'

const Todos = () => {
  const [addLayerStatus, setAddLayerStatus] = useState(false)
  const [bottomSheetStatus, setBottomSheetStatus] = useState(false)
  const [title, setTitle] = useState('')

  const handleAddLayerOpen = () => {
    setAddLayerStatus(true)
  }

  const handleAddLayerClose = () => {
    setAddLayerStatus(false)
  }

  const handleAddUrl = () => {
    alert('준비중인 서비스입니다')
  }

  const handleAddTodoLayer = () => {
    setAddLayerStatus(false)
    setBottomSheetStatus(true)
  }

  const handleCancel = () => {
    setBottomSheetStatus(false)
    setTitle('')
  }

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleSubmit = () => {}

  return (
    <div>
      <p>할일 목록 페이지입니다.</p>

      
      {/* 할 일 추가 버튼 */}
      <AddTodoMainButton />

      {/* + 버튼을 눌렀을 때 할일 추가/볼것 추가 모달이 뜸(할일 목록 부분 dim 처리됨(이 부분은 css에서)) */}
      {/* 그리고 할일 추가를 클릭하면 할일 추가/볼것 추가 모달이 사라지고 할일 등록하는 바텀 시트 모달이 뜸 */}
      {/* 볼것 추가를 클릭하면 얼럿으로 처리 */}
      {/* X를 누르게 되면 할일 추가/볼것 추가 모달이 사라짐 */}
      {!bottomSheetStatus && (
        <button
          onClick={addLayerStatus ? handleAddLayerClose : handleAddLayerOpen}
        >
          {addLayerStatus ? 'X' : '+'}
        </button>
      )}
      {/* 할일 추가/볼것 추가 모달 START */}
      {addLayerStatus && (
        <div
          style={{ backgroundColor: 'skyblue' }}
          onClick={handleAddLayerClose}
        >
          <div className="add-layer">
            <button onClick={handleAddTodoLayer}>할일 추가</button>
            <button onClick={handleAddUrl}>볼 것(URL 추가)</button>
          </div>
        </div>
      )}
      {/* 할일 추가/볼것 추가 모달 END */}

      {/* 할일 등록하는 바텀 시트 모달 START */}
      {bottomSheetStatus && (
        <div>
          <input
            type="text"
            placeholder="새 할일 입력"
            value={title}
            onChange={handleChangeTitle}
          />
          {/* <RangeSlider /> */}
          <div>
            <button onClick={handleCancel}>취소</button>
            <button disabled={!title} onClick={handleSubmit}>
              추가
            </button>
          </div>
        </div>
      )}
      {/* 할일 등록하는 바텀 시트 모달 END */}

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
  )
}

export default Todos

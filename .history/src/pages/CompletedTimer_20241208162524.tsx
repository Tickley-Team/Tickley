import { useNavigate } from 'react-router'

const CompletedTimer = () => {
  const navigate = useNavigate()
  const handleClickDone = () => {
    navigate('/todos/memory')
  }

  return (
    <div>
      <h1>15분 명상하기</h1>
      <h2>완료했어요!</h2>
      <img alt="이미지" />
      <button onClick={handleClickDone}>완료</button>
    </div>
  )
}

export default CompletedTimer

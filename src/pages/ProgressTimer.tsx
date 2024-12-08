import ProgressTimerQuitPopup from '../components/ProgressTimerQuitPopup'
import { MobileLayout } from '../layout/MobileLayout'
import useProgressTimerPage from '../hooks/useProgressTimerPage'

const ProgressTimer = () => {
  const { isShowQuitPopup, timeLeft, setShowQuitPopup, handleClickTimeStop, formatTime } = useProgressTimerPage();
  
  return (
    <MobileLayout>
      <div>
        <h1>15분 명상하기</h1>
        <p>
          자투리시간 15분간 <br />
          몸과 마음을 리프레시 해보아요
        </p>
        <div>{formatTime(timeLeft)}</div>
        <div>프로그레스바</div>
        <button onClick={handleClickTimeStop}>일시정지</button>
        <button onClick={() => setShowQuitPopup(true)}>그만두기</button>
      </div>
      {isShowQuitPopup && (
        <ProgressTimerQuitPopup onClickClose={() => setShowQuitPopup(false)} />
      )}
    </MobileLayout>
  )
}

export default ProgressTimer

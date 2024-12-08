import ProgressTimerQuitPopup from '../components/ProgressTimerQuitPopup'
import { MobileLayout } from '../layout/MobileLayout'
import useProgressTimerPage from '../hooks/useProgressTimerPage'
import { LinearProgress } from '@mui/material';

const ProgressTimer = () => {
  const { 
    isShowQuitPopup, isRunning, totalTime,timeLeft, 
    handleClickSwitchQuit, handleClickTimeStop, formatTime, 
  } = useProgressTimerPage();
  
  return (
    <MobileLayout>
      <div>
        <h1>15분 명상하기</h1>
        <p>
          자투리시간 15분간 <br />
          몸과 마음을 리프레시 해보아요
        </p>
        <div>{formatTime(timeLeft)}</div>
        <LinearProgress variant="determinate" value={((totalTime - timeLeft) / totalTime) * 100} />
        <button onClick={handleClickTimeStop}>{isRunning ? '일시정지' : '다시시작'}</button>
        <button onClick={() => handleClickSwitchQuit(true)}>그만두기</button>
      </div>
      <ProgressTimerQuitPopup open={isShowQuitPopup} onClickClose={() => handleClickSwitchQuit(false)} />
    </MobileLayout>
  )
}

export default ProgressTimer

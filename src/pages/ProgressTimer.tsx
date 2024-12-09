import { LinearProgress, Typography } from '@mui/material'

import ProgressTimerQuitPopup from '../components/ProgressTimerQuitPopup'
import { MobileLayout } from '../layout/MobileLayout'
import useProgressTimerPage from '../hooks/useProgressTimerPage'
import { CTAButton } from '../components/Button'
import { useTodoStore } from '../stores/todoStore'

const ProgressTimer = () => {
  const {
    isShowQuitPopup,
    isRunning,
    totalTime,
    timeLeft,
    handleClickSwitchQuit,
    handleClickTimeStop,
    formatTime,
  } = useProgressTimerPage()
  const { todo } = useTodoStore()
  return (
    <MobileLayout>
      <div style={{ marginTop: '176px', textAlign: 'center' }}>
        <Typography variant="title-6-bold-34">
          {todo?.estimateTime}분 {todo?.title}
        </Typography>
        <br />
        <Typography variant="title-5-medium-16">
          자투리시간 {todo?.estimateTime}분간
          <br />
          몸과 마음을 리프레시 해보아요
        </Typography>
        <Typography variant="headline-5-medium">
          {formatTime(timeLeft)}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={((totalTime - timeLeft) / totalTime) * 100}
          style={{ marginTop: '32px' }}
        />
        <CTAButton
          onClick={handleClickTimeStop}
          style={{ marginTop: '116px', width: '343px' }}
        >
          {isRunning ? '일시정지' : '다시시작'}
        </CTAButton>
        <CTAButton
          onClick={() => handleClickSwitchQuit(true)}
          style={{ marginTop: '16px', width: '343px' }}
        >
          그만두기
        </CTAButton>
      </div>
      <ProgressTimerQuitPopup
        open={isShowQuitPopup}
        onClickClose={() => handleClickSwitchQuit(false)}
      />
    </MobileLayout>
  )
}

export default ProgressTimer

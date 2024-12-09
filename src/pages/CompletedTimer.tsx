import { useNavigate } from 'react-router'
import { MobileLayout } from '../layout/MobileLayout'
import { Typography } from '@mui/material'
import { CTAButton } from '../components/Button'
import illust from '../assets/illust.svg'
import { useTodoStore } from '../stores/todoStore'

const CompletedTimer = () => {
  const { todo } = useTodoStore()
  const navigate = useNavigate()
  const handleClickDone = () => {
    navigate('/todos/memory')
  }

  return (
    <MobileLayout>
      <div style={{ marginTop: '176px', textAlign: 'center' }}>
        <Typography variant="title-6-bold-34">
          {todo?.estimateTime}분 {todo?.title}
        </Typography>
        <br />
        <Typography variant="title-5-medium-26">완료했어요!</Typography>
        <br />
        <img src={illust} alt="이미지" />
        <br />
        <CTAButton
          onClick={handleClickDone}
          style={{ marginTop: '214px', width: '343px' }}
        >
          완료
        </CTAButton>
      </div>
    </MobileLayout>
  )
}

export default CompletedTimer

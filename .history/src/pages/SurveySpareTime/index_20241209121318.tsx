import { useCallback } from 'react'
import { useNavigate } from 'react-router'
import { MobileLayout } from '../../layout/MobileLayout'
import { RangeSlider } from '../../components/RangeSlider'
import { Typography } from '@mui/material'

const SurveySpareTime = () => {
  const navigate = useNavigate()
  const handleClickButton = useCallback(() => {
    navigate('/todos/find')
  }, [])
  return (
    <MobileLayout>
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', mb: 2, color: '#474747' }}
      >
        틈새 시간이 얼마나 있나요?
      </Typography>
      <RangeSlider />
      <button onClick={handleClickButton}>할일 찾기 </button>
    </MobileLayout>
  )
}

/

export default SurveySpareTime

import { useCallback } from 'react'
import { useNavigate } from 'react-router'
import { MobileLayout } from '../../layout/MobileLayout'
import { RangeSlider } from '../../components/RangeSlider'
import { Typography } from '@mui/material'
import { CTAButton } from '../../components/Button'

const SurveySpareTime = () => {
  const navigate = useNavigate()
  const handleClickButton = useCallback(() => {
    navigate('/todos/find')
  }, [])
  return (
    <MobileLayout>
      <Typography
        variant="title-6-bold-34"
        sx={{
          whiteSpace: 'pre-line',
        }}
      >
        {`자투리 시간이 얼마나\n있나요?`}
      </Typography>
      <RangeSlider />
      <CTAButton onClick={handleClickButton}>할일 찾기 </CTAButton>
    </MobileLayout>
  )
}

export default SurveySpareTime

import styled from '@emotion/styled'
import { Box, Slider, SliderProps, Typography } from '@mui/material'
import { useRecommendTodoFilterStore } from '../stores/recommendTodoFilterStore'

type RangeSliderProps = Partial<SliderProps>

const RangeMapper = [
  { value: 5, label: '5분 이하', displayText: '5분 이하', time: 5 },
  { value: 25, label: '', displayText: '5분~15분', time: 15 },
  { value: 50, label: '', displayText: '15분~25분', time: 25 },
  { value: 75, label: '', displayText: '25분~35분', time: 35 },
  { value: 100, label: '40분 이상', displayText: '40분 이상', time: 40 },
]

export const RangeSlider = ({ ...restProps }: RangeSliderProps) => {
  const { spareTime, setSpareTime } = useRecommendTodoFilterStore()

  const handleChange = (_event: Event, value: number | number[]) => {
    const time = RangeMapper.find((step) => step.value === value)?.time
    setSpareTime(time ?? 5)
  }

  const marks = RangeMapper.map(({ value, label }) => ({
    value,
    label,
  }))
  return (
    <Box width={'100%'}>
      <Typography variant="title-5-medium-26">
        {/* TODO: refactor 연산 */}
        {RangeMapper.find(({ time }) => time === spareTime)?.displayText}
      </Typography>
      <CustomSlider
        value={RangeMapper.find(({ time }) => time === spareTime)?.value}
        marks={marks}
        step={null}
        onChange={handleChange}
        {...restProps}
      />
    </Box>
  )
}

const CustomSlider = styled(Slider)({
  height: 32,
  padding: 0,
  marginTop: 10,
  borderRadius: 9999,
  '& .MuiSlider-rail': {
    opacity: 1,
    backgroundColor: '#E0E0E0', // gray300
  },
  '& .MuiSlider-track': {
    border: 'none',
    backgroundColor: '#00A76F', // pri500
  },
  '& .MuiSlider-thumb': {
    height: 58,
    width: 58,
    backgroundColor: '#00A76F', // pri500
    border: '2px solid #fff',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#F2F2F2', // gray200
    height: 8,
    width: 8,
    borderRadius: '50%',
    marginTop: 0,
  },
  '& .MuiSlider-markLabel': {
    color: '#1976d2', // 마크 라벨 텍스트 색상
    fontSize: '14px', // 글꼴 크기

    top: 53, // 위치 조정
  },
})

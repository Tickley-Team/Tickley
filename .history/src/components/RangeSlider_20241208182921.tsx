import styled from '@emotion/styled'
import { Box, Slider, SliderProps, Typography } from '@mui/material'
import { useRecommendTodoFilterStore } from '../stores/recommendTodoFilterStore'

type RangeSliderProps = Partial<SliderProps>
const rangeMapper = [
  { value: 5, label: '5분 이하', displayText: '5분 이하' },
  { value: 25, label: '', displayText: '5분~15분' },
  { value: 50, label: '', displayText: '15분~25분' },
  { value: 75, label: '', displayText: '25분~35분' },
  { value: 100, label: '40분 이상' },
]
const getRageText = () => {
  const rangeMapper = [{ value: 5 }]
}
export const RangeSlider = ({ ...restProps }: RangeSliderProps) => {
  const { spareTime, setSpareTime } = useRecommendTodoFilterStore()

  const handleChange = (
    event: Event,
    value: number | number[],
    activeThumb: number,
  ) => {
    setSpareTime(value as number)
    console.log('value ', value, activeThumb)
  }

  const marks = [
    { value: 5, label: '5분 이하' },
    { value: 25 },
    { value: 50 },
    { value: 75 },
    { value: 100, label: '40분 이상' },
  ]
  return (
    <Box width={'100%'}>
      <Typography sx={{ mb: 1, color: '#666666' }}>{getRageText}</Typography>
      <CustomSlider
        defaultValue={25}
        marks={marks}
        step={null}
        onChange={handleChange}
        {...restProps}
      />
    </Box>
  )
}

const CustomSlider = styled(Slider)({
  height: 8,
  padding: 0,
  '& .MuiSlider-rail': {
    opacity: 1,
    backgroundColor: '#E0E0E0', // gray300
  },
  '& .MuiSlider-track': {
    border: 'none',
    backgroundColor: '#00A76F', // pri500
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
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
})

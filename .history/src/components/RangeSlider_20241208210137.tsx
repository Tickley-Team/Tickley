import styled from '@emotion/styled'
import { Box, Slider, SliderProps, Typography } from '@mui/material'
import { useRecommendTodoFilterStore } from '../stores/recommendTodoFilterStore'

type RangeSliderProps = Partial<SliderProps>

const RangeMapper = [
  { value: 5, label: '5분 이하', displayText: '5분 이하' },
  { value: 25, label: '', displayText: '5분~15분' },
  { value: 50, label: '', displayText: '15분~25분' },
  { value: 75, label: '', displayText: '25분~35분' },
  { value: 100, label: '40분 이상', displayText: '40분 이상' },
]

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

  const marks = RangeMapper.map(({ value, label }) => ({
    value,
    label,
  }))
  return (
    <Box width={'100%'}>
      <Typography sx={{ mb: 1, color: '#666666' }}>
        {/* TODO: refactor 연산 */}
        {RangeMapper.find(({ value }) => value === spareTime)?.displayText}
      </Typography>
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

const Button = styled(BaseButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  text-decoration: none;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: 0 2px 1px ${
    theme.palette.mode === 'dark'
      ? 'rgba(0, 0, 0, 0.5)'
      : 'rgba(45, 45, 60, 0.2)'
  }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonClasses.active} {
    background-color: ${blue[700]};
    box-shadow: none;
    transform: scale(0.99);
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }

  &.${buttonClasses.disabled} {
    background-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[700]};
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
  `,
)

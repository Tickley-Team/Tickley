import { Slider,SliderProps, Typography } from '@mui/material'

type RangeSliderProps = 
export const RangeSlider = ({defaultValue}: Props) => {
  return (
    <div style={{ width: '100%', marginBottom: '20px' }}>
      <Typography gutterBottom>Range Slider</Typography>
      <Slider
        aria-label="Restricted values"
        getAriaValueText={valuetext}
        valueLabelDisplay={valueLabelDisplay}
        {...restProps} // 모든 props를 Slider에 전달
      />
    </div>
  )
}

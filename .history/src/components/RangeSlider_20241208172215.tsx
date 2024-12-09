import { Slider,SliderProps, Typography } from '@mui/material'

type RangeSliderProps = 
export const RangeSlider = ({defaultValue}: Props) => {
  return (
    <div style={{ width: '100%', marginBottom: '20px' }}>
      <Typography gutterBottom>{valuetext}</Typography>
      <Slider
        aria-label="Restricted values"
        getAriaValueText={valuetext}
        valueLabelDisplay={valueLabelDisplay}
        {...restProps} // 모든 props를 Slider에 전달
      />
    </div>
  )
}

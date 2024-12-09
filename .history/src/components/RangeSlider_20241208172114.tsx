import { Slider,SliderProps } from '@mui/material'

type RangeSliderProps = 
export const RangeSlider = ({defaultValue}: Props) => {
  return (
    <Slider
      aria-label="Restricted values"
      defaultValue={15}
      getAriaValueText={valuetext}
      step={null}
      valueLabelDisplay="auto"
      marks={marks}
    />
  )
}

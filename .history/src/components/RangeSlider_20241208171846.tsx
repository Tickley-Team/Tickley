import { Slider } from '@mui/material'
import React from 'react'

const RangeSlider = (props: Props) => {
  return (
    <Slider
      aria-label="Restricted values"
      defaultValue={20}
      getAriaValueText={valuetext}
      step={null}
      valueLabelDisplay="auto"
      marks={marks}
    />
  )
}

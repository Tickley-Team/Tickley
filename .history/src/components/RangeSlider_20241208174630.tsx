import styled from '@emotion/styled'

export const RangeSlider = (props: Props) => {
  return (
    <Box sx={{ maxWidth: 600, p: 3 }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', mb: 2, color: '#474747' }}
      >
        특새 시간이 얼마나 있나요?
      </Typography>

      <Typography sx={{ mb: 1, color: '#666666' }}>15분~25분</Typography>

      <CustomSlider value={50} marks={marks} disabled />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 1,
          color: '#A3A3A3',
          fontSize: '0.875rem',
        }}
      >
        <Typography>5분 이하</Typography>
        <Typography>40분 이상</Typography>
      </Box>
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
